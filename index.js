import {default as globby11} from "globby-11";
import {globbySync as globby12} from "globby-12";
import {globbySync as globby13} from "globby-13";
import {run} from "./src/tasks/globby.sync.js";

const testObjects = [
	{ globby: globby11.sync, version: '11.1.0' },
	{ globby: globby12, version: '12.2.0' },
	{ globby: globby13 , version: '13.2.1' },
];

run(testObjects, 100);
