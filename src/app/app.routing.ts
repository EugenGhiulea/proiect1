import { RouterModule, Routes } from "@angular/router";
import { PrimaComponent } from "./prima/prima.component";
import { DoileaComponent } from "./doilea/doilea.component";
import { NgModule } from "@angular/core";

const rute: Routes=[
{
    path: "prima-mea-ruta",
    component: PrimaComponent
},
{
    path: "a-2-a-mea-ruta",
    component: DoileaComponent
}
]
@NgModule({
    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]
})


export class AppRoutes{}