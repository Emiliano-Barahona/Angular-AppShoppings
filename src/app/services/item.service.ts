import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string = "http://localhost:3000/items"; // The server url
  httpOptions = { 
    headers: {
      "Content-Type": "application/json"
    }
  };

  items: Item[] = [ // ---> The first items
    {
      id: 0,
      title: "manzana",
      price: 10.5,
      quantity: 4,
      completed: false 
    },
    {
      id: 1,
      title: "pan",
      price: 3.5,
      quantity: 8,
      completed: true 
    },
    {
      id: 2,
      title: "campera",
      price: 300,
      quantity: 1,
      completed: false
    }
  ];

  constructor(private http: HttpClient) { }

  getItems():Observable<Item[]> { //Get the item
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item[]> { //Post the item
  return this.http.post<Item[]>(this.url, item, this.httpOptions)
  }

  toggleItem(item: Item): Observable<Item> { //Put the item
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions)
  }

  deleteItem(item: Item): Observable<Item> { //Delete the item
    return this.http.delete<Item>(this.url + item.id)
  }
}
