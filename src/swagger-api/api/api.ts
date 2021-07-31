import {AuthControllerService} from "./authController.service";

export * from './categoryController.service';
import { CategoryControllerService } from './categoryController.service';
export * from './commentController.service';
import { CommentControllerService } from './commentController.service';
export * from './homePageController.service';
import { HomePageControllerService } from './homePageController.service';
export * from './poemController.service';
import { PoemControllerService } from './poemController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [CategoryControllerService, CommentControllerService, HomePageControllerService, PoemControllerService, UserControllerService, AuthControllerService];
