import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { INTERESTS } from '../interest-list';
import { API_KEY } from '../api-key';
import {Location} from '@angular/common'; 


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:Article[] = [];
  interests = INTERESTS;  

  constructor(private location: Location) { }

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
    let query = `https://newsapi.org/v2/everything?q=${interest}&from=2021-10-31&language=en&to=2021-10-31&sortBy=popularity&apiKey=${API_KEY}`;
    this.getArticlesOnInterest(query);
  }

  onSelectArticle(article: Article): void {
    console.log("Test On Click Article", article.url);

    //getting the URL
    let url = article.url;
    document.location.href = url;
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

  goToProfile(): void {
    this.location.replaceState("/profile/");
    //console.log("Go To Profile Page");
    //document.location.href = "/profile";
  }
}

