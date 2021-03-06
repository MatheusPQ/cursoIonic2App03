import { ConfigPage } from './../pages/config/config';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
	MyApp,
	AboutPage,
	ConfigPage,
	ContactPage,
	HomePage,
	TabsPage
  ],
  imports: [
	BrowserModule,
	IonicModule.forRoot(MyApp, {
		//mode: 'ios', //md, ios
		platforms: {
			android: {
				mode: 'ios'
			},

			ios: {

			},

			windows: {
				tabsPlacement: 'bottom'
			}
		}

		//tabsPlacement: 'top' 

		// platforms: {
		// 	ios: {
		// 		tabsPlacement: 'top'
		// 	}
		// }
	})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	MyApp,
	AboutPage,
	ConfigPage,
	ContactPage,
	HomePage,
	TabsPage
  ],
  providers: [
	StatusBar,
	SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
