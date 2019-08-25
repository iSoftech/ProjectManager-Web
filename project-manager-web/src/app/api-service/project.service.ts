import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';
import { ProjectResponse } from '../model/projectResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl: string = '/projects/';

  constructor(private http: HttpClient) { }

  getAllProjects() : Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(this.baseUrl, httpOptions);
  }

  getProject(id: number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(this.baseUrl + id, httpOptions);
  }

  addProject(project: Project): Observable<ProjectResponse> {
    return this.http.post<ProjectResponse>(this.baseUrl, project, httpOptions);
  }
  
  updateProject(project: Project): Observable<ProjectResponse> {
    return this.http.put<ProjectResponse>(this.baseUrl + project.projectId, project, httpOptions);
  }

  deleteProject(id: number): Observable<ProjectResponse> {
    return this.http.delete<ProjectResponse>(this.baseUrl + id);
  }
}
