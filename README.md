# Webengage

Webengage is a project designed to consume three APIs simultaneously, combine data from each into a CSV file, and return the path of that file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/webengage/webengage.git](https://github.com/keyes343/webengage.git)
   ```
2. Navigate to the project directory:

   ```bash

   cd webengage
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```
4. Start the production server:
   ```bash
   yarn prod
   ```
5. Open your browser and go to:
   ```
   http://localhost:5000/generate-csv
   ```
   You will receive the path where to find the generated CSV file.

## Usage

After following the installation steps, you can generate the CSV file by accessing the endpoint mentioned above. The response will include the path to the generated CSV file.
