import { Injector } from "@angular/core";

import { ApiService } from '../services/api-service.service';


export abstract class AppComponentBase {
    // authenticationService: AuthenticationService;
    apiService: ApiService;
    // notificationService: SnackBarService;
    constructor(injector: Injector) {
        // this.authenticationService = injector.get(AuthenticationService);
        this.apiService = injector.get(ApiService);
        // this.notificationService = injector.get(SnackBarService);
    }

}