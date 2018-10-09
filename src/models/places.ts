import { Location } from '../models/location';

export class Places {
	constructor(public title: string,
				public description: string,
				public location: Location,
				public imagePath: string){

	}
}