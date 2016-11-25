// import all definitions
// don't reference this file from your typescript files, instead use the TS file:
// import refdef = require('lib/ReferenceDefinitions');

///<reference path="require/require.d.ts" />
///<reference path="gsap/greensock.d.ts" />
///<reference path="jquery/jquery.d.ts" />
///<reference path="history/history.d.ts" />
///<reference path="modernizr/modernizr.d.ts" />
///<reference path="knockout/knockout.d.ts" />
///<reference path="masonry/masonry.d.ts" />
///<reference path="google/ga.d.ts" />
///<reference path="slaask/chat.d.ts" />


// export files as typescript module in which a javascript define() is used instead of a typescript export.
// this way they can be imported as "import externals = require('lib/externals');" in a typescript file.
declare module "lib/externals"
{
	// dummy export, needed for not removing the import
	var ext:any;
	export = ext;
}

//declare module "app/config/config"
//{
//	// dummy export, needed for not removing the import
//	var cfg:any;
//export = cfg;
//}


// declare global libaries and variables that have no typescript definitions
declare var DEBUG:boolean;
declare var RELEASE:boolean;
declare var isMobile:boolean;
declare var XRegExp:any;
declare var YT:any;
declare var InstantClick:any;
declare var google:any;