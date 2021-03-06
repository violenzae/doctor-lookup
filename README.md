# _Doctor Lookup_

#### _A page that returns local doctors that can treat specific symptoms_

#### By Rachel Schieferstein

## Description

_This is an HTML page that contains a jQuery powered form that returns Portland doctors that treat given inputted symptoms. It uses branching logic. It is designed with Bootstrap CSS._

## Setup/Installation Requirements


* _Clone or download from Github Repository._
*  _Sign up with and receive an API Key from http://betterdoctor.com_
*  _Sign up with and receive an API Key from https://developer.mapquest.com/_
* _Create a .env file in the root directory, and add the Better Doctor key to the file: API_KEY=your-key-here and the MapQuest key as: OTHER_API_KEY=your-key-here._
* _Run "npm install" in your terminal in the root directory._
* _Run "npm run start" in your terminal in the root directory._


## Specifications
| Behavior      | Input         | Output|
| ------------- |:-------------:| -----:|
| Outputs doctors treat inputted symptom   | rash             | list of doctors associated w or treat rashes |
| Output doctors that match inputted name   | marcus             | list of doctors with marcus in their name |
| Output doctors that match 25 mile radius of inputted address   | 123 candy lane, candy town, OR 23445           | list of doctors within 25 miles of this address |
| Output shows message when no doctors match criteria   | fsadfd             | "There are no results for this search."|
| Output shows error message when API call fails   | <API Fail>             | "Something went wrong with this request." |


## Known Bugs

N/A

## Support and contact details

_If there are any questions, please contact me at violenza@gmail.com._

## Technologies Used

_This page was created using HTML, jQuery, CSS and Bootstrap CSS, node JS, webpack, Mapquest Geocoder API and Better Doctor API._

### License

*This software is licensed under the MIT license.*

Copyright (c) 2020 **_Rachel Schieferstein_**