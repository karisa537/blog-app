import { Component, NgModule } from "@angular/core";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
    { path: '', component: BlogListComponent },
    { path: '', redirectTo: '/blogs', pathMatch: 'full'},
    { path: 'post/:id', component: BlogPostComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule {}