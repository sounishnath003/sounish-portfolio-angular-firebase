import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiData } from './apiData';
import { Repostitory } from './repostitory';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  API_URL = 'https://api.github.com/users/sounishnath003';
  public apiData: ApiData;
  public repositoryData: Repostitory;
  public bio: string;
  reposUrl: string;
  constructor(private http: HttpClient) {
    this.getAllData();
  }

  getAllData() {
    this.fetchData();
    this.getCustomData();
    this.fetchRepoData() ;
  }

  getCustomData() {
    return this.apiData;
  }

  fetchData() {
    return this.http.get<ApiData>(this.API_URL) ;
  }

  fetchRepoData() {
    return this.http.get<Repostitory>(
      'https://api.github.com/users/sounishnath003/repos'
    );
  }
}
