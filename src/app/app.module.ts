import { MessageService } from "primeng/api";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ParticleEffectButtonModule } from "angular-particle-effect-button";
import { MatSnackBarModule } from "@angular/material";
import { TooltipModule } from "primeng/tooltip";
import { ToastModule } from "primeng/toast";
import { RestManagerService } from "./services/rest-manager.service";
import { SessionGuardian } from "./services/guardians/session-guardian";
import { SidebarModule } from "primeng/sidebar";
import { FileUploadModule } from "primeng/fileupload";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogImgCropperComponent } from "./micro-components/dialog-img-cropper/dialog-img-cropper.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { GlobalFrameComponent } from "./components/global-frame/global-frame.component";
import { HomeComponent } from "./components/home/home.component";
import { UserConfigurationComponent } from "./components/user-configuration/user-configuration.component";
import { AppConfigurationComponent } from "./components/app-configuration/app-configuration.component";
import { ActiveRoutineComponent } from "./components/active-routine/active-routine.component";
import { AllRoutinesComponent } from "./components/all-routines/all-routines.component";
import { DialogConfirmationComponent } from "./micro-components/dialog-confirmation/dialog-confirmation.component";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { SidebarFrameComponent } from './components/global-frame/sidebar-frame/sidebar-frame/sidebar-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GlobalFrameComponent,
    ActiveRoutineComponent,
    AllRoutinesComponent,
    HomeComponent,
    UserConfigurationComponent,
    AppConfigurationComponent,
    DialogImgCropperComponent,
    DialogConfirmationComponent,
    SidebarFrameComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ParticleEffectButtonModule,
    MatSnackBarModule,
    TooltipModule,
    ToastModule,
    SidebarModule,
    FileUploadModule,
    MatDialogModule,
    ImageCropperModule,
    MatBottomSheetModule
  ],
  providers: [MessageService, RestManagerService, SessionGuardian],
  bootstrap: [AppComponent],
  entryComponents: [DialogImgCropperComponent, DialogConfirmationComponent]
})
export class AppModule {}
