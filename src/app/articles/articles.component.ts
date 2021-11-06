import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { INTERESTS } from '../interest-list';
import { API_KEY } from '../api-key';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:Article[] = [];
  interests = INTERESTS;  

  testVar = "Testing";

  //articleTest2: Article;

  articleTest: Article = {
    author: "PAUL NEWBERRY",
    content: "ATLANTA (AP) Matthew Kaminski had intended to play a Grateful Dead song as the walk-up music for Houston's starting pitcher at the World Series.\r\nLuis Garcia. Jerry Garcia. Get it?\r\nThen, after getti… [+7737 chars]",
    description: "Matthew Kaminski had intended to play a Grateful Dead song as the walk-up music for Houston's starting pitcher at the World Series.  Then, after getting a...",
    publishedAt: "2021-10-31T06:16:43Z",
    title: "Play me a song: Braves organist charms fans, amuses players",
    url: "https://news.yahoo.com/play-song-braves-organist-charms-061643048.html"
  }

  constructor() { }

  ngOnInit(): void {

    //Getting the first interest in your info
    let search_data = INTERESTS[0];

    //Search google news API for the interest
    let query = `https://newsapi.org/v2/everything?q=${search_data}&from=2021-10-31&to=2021-10-31&sortBy=popularity&apiKey=${API_KEY}`;

    this.getArticlesOnInterest(query);
  }

  onSelectInterest(interest: String): void {
    //console.log("test", interest);

    //Reset articles
    this.articles = [];

    //New Query with new interest
    let query = `https://newsapi.org/v2/everything?q=${interest}&from=2021-10-31&to=2021-10-31&sortBy=popularity&apiKey=${API_KEY}`;
    this.getArticlesOnInterest(query);
  }

  getArticlesOnInterest(query: string): void {
    console.log("testing Query", query);

    fetch(query)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data.articles);

        //Parsing the article into our type script format
        data.articles.forEach((element: any) => {
          let singleArticle: Article = {
            author: element.author,
            content: element.content,
            description: element.description,
            publishedAt: element.publishedAt,
            title: element.title,
            url: element.url          
          } 

          //console.log("Testing", singleArticle);
          //Putting each article into the array where it's stored
          this.articles.push(singleArticle);
        })

        //console.log("\nEnd of fetch request", this.articles);
      })
  }
}

