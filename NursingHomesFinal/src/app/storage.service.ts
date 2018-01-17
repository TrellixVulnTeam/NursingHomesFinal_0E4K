import { Injectable } from '@angular/core';
import { Home } from "./Home";
import { Homes } from "./mock-homes";
import { User } from "./User";
import { Person } from "./Person";
import { Review } from "./Review";

@Injectable()
export class StorageService {
    Homes: Home[];
    CurrentUser: User = null;
    CurrentHome: Home = null;
    Criteria: string[] = ["rating", ""];
    address: string;
    needsACheck: boolean;
    getNeedsACheck() {
        return this.needsACheck;
    }
    updateCheck(value) {
        this.needsACheck = value;
    }
    updateAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
    updateHomes(Homes) {
        this.Homes = Homes;
    }
    getHomes(): Promise<Home[]> {
        return Promise.resolve(Homes);
    }
    getCurrentHome(): Home {
        return this.CurrentHome;
    }
    setCurrentHome(Home: Home): void {
        this.CurrentHome = Home;
    }
    getUser(): User {
        return this.CurrentUser;
    }
    LogIn(): void {
        this.CurrentUser = new User("Joe", "Bloggs", "JoeBlogg@email.com", "test", "0831234567",
        [
            new Home("h1","JoeBlogg@email.com","ABC Homes", "Hollymount", "Sligo", "Ireland", 9.2,"0711234567", "ABC@email.ie", "Joe", "https://www.google.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,false,false,true,true,true,true,true,false,false,false,false,false],0,[new Review(1,"Joe B.",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"This is a test comment to show how long a real comment would be and test the width of the review. Nothing interesting at all to see here. Move along citzen.",57,1,"Thanks"),new Review(2,"Test",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",75,111,"")],54.2800647,-8.483942999999954,0),
            new Home("h2","JoeBlogg@email.com","CDE Homes", "Glencarrig", "Sligo", "Ireland", 8.5,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,false,false,true,true,true,true,true,false,false,false,false,false],1,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",21,15,""),new Review(2,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",57,10,""),new Review(3,"Test",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",75,1,"")],54.2764388,-8.455425999999989,0),
            new Home("h3","JoeBlogg@email.com","BCD Homes", "Athenry", "Galway", "Ireland", 9.2,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,true,false,true,true,true,true,true,false,false,false,false,false],2,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",100,1,"")],53.3008131,-8.745376800000031,0),
            new Home("h4","JoeBlogg@email.com","DEF Homes", "Listowel", "Kerry", "Ireland", 8.7,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,false,false,false,false,true,true,true,true,true,false,false,false,false,false],3,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",21,1,"")],52.4460488,-9.485365499999943,0),
            new Home("h5","JoeBlogg@email.com","EFG Homes", "Ballymun", "Dublin", "Ireland", 8.9,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,false,false,true,true,true,true,true,false,false,false,false,false],4,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",100,1,"")],53.39907,-6.281790799999953,0),
            new Home("h6","JoeBlogg@email.com","FGH Homes", "Athlone", "Westmeath", "Ireland", 8.2,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,false,false,true,true,true,true,true,false,false,false,false,false],0,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",21,1,"")],53.4239331,-7.940689799999973,0),
            new Home("h7","JoeBlogg@email.com","GHI Homes", "Galway", "Galway", "Ireland", 9,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,true,false,true,true,true,true,true,false,false,false,false,false],1,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",100,1,"")],53.270668,-9.056790500000034,0),
            new Home("h8","JoeBlogg@email.com","HIJ Homes", "Finglas", "Dublin", "Ireland", 6,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,true,false,true,true,true,true,true,false,false,false,false,false],2,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",21,1,"")],53.390325,-6.298400700000002,0),
            new Home("h9","JoeBlogg@email.com","IJK Homes", "Tralee", "Kerry", "Ireland", 7.5,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,true,false,true,true,true,true,true,false,false,false,false,false],3,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,9,"Mostly Compliant",21,1,"")],52.2713096,-9.699932499999932,0),
            new Home("h10","JoeBlogg@email.com","JKL Homes", "Athlone", "Westmeath", "Ireland", 9.2,"0711234567", "ABC@email.ie", "Joe", "www.ABCHomes.ie","www.report.ie","50","10","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",[false,true,true,true,true,false,false,false,false,true],[true,true,true,true,false,true,true,true,true,true,false,false,false,false,false],4,[new Review(1,"HIQA",4,5,4,5,4,5, 4, 5, 4, 5, 4, 5,7,"Mostly Compliant",100,1,"")],53.4239331,-7.940689799999973,0)
          ]);
    }
    Logout(): void {
        this.CurrentUser = null;
    }
    setCriteria(criteria: string[]): void {
        this.Criteria = criteria;
    }
    getCriteria(): string[] {
        return this.Criteria;
    }
    UpdateReviews(Review: Review): void {
        this.CurrentHome.reviews.push(Review);
    }
}