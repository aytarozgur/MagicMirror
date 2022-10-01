/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	//address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	//port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	address: '0.0.0.0',
	electronOptions: {},
	ipWhitelist: [
	'127.0.0.1',
	'::ffff:127.0.0.1',
	'::1',
	'192.168.1.0/24',
	'172.16.1.0/24'
	],
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "tr",
	locale: "tr-TR",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Takvimim ve Özel Günler",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/xxx/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Eskisehir",
				locationID: "315202", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "Your Api Key"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Hava Durumu",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Eskisehir",
				locationID: "315202", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "Your Api Key"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					/*{
						title: "CNN Türk",
						url: "https://www.cnnturk.com/feed/rss/turkiye/news"
					},
					{
						title: "BirGun",
						url: "https://www.birgun.net/xml/rss.xml"
					},*/
					{
					    title: 'Dünya Gündemi',
					    url: 'http://feeds.bbci.co.uk/turkce/rss.xml'
				  	}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		
		{
			module: "MMM-cryptocurrency",
			position: "top_left",
			config: {
				apikey: 'Your Api Key',
				currency: ['ethereum', 'bitcoin'],
				conversion: 'USD',
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logo',
				significantDigits: 5,
				showGraphs: false
			}
		},
		{
		      module: 'MMM-NowPlayingOnSpotify',
		      position: 'top_left',
		      config: {
			showCoverArt: false,
			clientID: 'Your Client ID',
			clientSecret: 'Your Client Secret',
			accessToken: 'Your Access Token',
			refreshToken: 'Your Refresh Token'
	      		}
	    	},
	    	{
		      module: 'MMM-Screencast',
		      position: 'middle_center',
		      config: {
			position: 'center',
			height: 300,
			width: 500
		      }
	    	},
		/*{
				module: 'MMM-LICE',
				position: 'top_left',                 // Best in left, center, or right regions
				config: { 
					accessKey: "Your Api Key", // Free account & API Access Key at currencylayer.com
					source: "USD",                    // USD unless you upgrade from free account
					symbols: "UAH,EUR,RUB",       // Currency symbols
					useHeader: false,                 
					header: "Show me the money",
					maxWidth: "300px",
					}
		},*/
		{
		      module: 'MMM-Remote-Control',
		      header: '',
		      config: {
			customCommand: {}
		      }
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
