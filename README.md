[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Employee Directory App

## Description

 The Employee Directory is a simple site that allows a user to intuitively search and sort through their employee records by name, DOB, email and phone number.
 This app was built using **React.js** with a focus on using class components instead of functional components, with **Bootstrap**, **Axios** and the **RandomUser.me** API to fill the data.



---------------------------

The deployed and functional site on Heroku can be found here: <https://spencerv86.github.io/employee-directory/>

The full process can be found on [my Github](https://github.com/spencerv86/) repository linked here:
<https://github.com/spencerv86/employee-directory>


---------------------------

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

If you would like to inspect the code, please begin by forking the repository and downloading to your computer. Make sure that you have node already installed. 
You will likely need to run 
```npm install``` but no other files should be necessary. If you would like to run the app locally, you can run ```npm start``` to do so.

If you would simply like to see the app in action, no installation is needed, just click the following link: <https://spencerv86.github.io/employee-directory/>

## Usage

On site load, the page will populate with 75 random "employees" in a random order. Each employee row displays their thumbnail, name, phone number, email address and date of birth. To sort these employees you can click any of the up/down carets and the table will reload, toggling between ascending/descending sorts. To search for an employee by name, you can simply start typing into the search bar. Please keep in mind that this will search for any part of the employee's name, instead of only the exact matches.

![App in action](./public/employee-directory.gif)

## Credits
Thanks to the helpful members of my group and cohort at large, as well as the instructional staff!

## License

MIT License

Copyright (c) 2021 Spencer Vaughan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.