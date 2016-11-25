import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    // having a slash means appending /message to the domain
    // not having a slash means appending to the existing path
    { path: '', redirectTo: '/messages', pathMatch: 'full' },  // pathMatch is important for empty path!
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);