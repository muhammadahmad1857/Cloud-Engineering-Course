# Currency Converter

M-Currency-Converter is a simple command-line tool for converting between different currencies. It provides conversion rates for popular currencies such as PKR, EURO, USD, INR, and SAR.

## Installation

You can install the M Currency Converter globally using npm:

```bash
npm install -g m-currency-converter
```

## Usage

After installation, you can use the following command to start the currency converter:

```bash
m-currency-converter
```

Alternatively, you can use it without installation using `npx`:

```bash
npx m-currency-converter
```

Follow the prompts to select the currency you want to convert from, the currency you want to convert to, and the amount you want to convert. The currency converter will then display the conversion result.

## Currency Conversion

The currency conversion rates used by M Currency Converter are as follows:

- PKR to EURO: 285
- PKR to USD: 260
- PKR to INR: 3.95
- PKR to SAR: 35.83
- EURO to PKR: 1 / 285
- EURO to USD: 1.08
- EURO to INR: 95
- EURO to SAR: 4.04
- USD to EURO: 1 / 1.08
- USD to PKR: 1 / 260
- USD to INR: 0.015
- USD to SAR: 0.018
- INR to EURO: 1 / 95
- INR to USD: 1 / 0.015
- INR to PKR: 1 / 3.95
- INR to SAR: 0.045
- SAR to EURO: 1 / 4.04
- SAR to USD: 1 / 0.018
- SAR to INR: 1 / 0.045
- SAR to PKR: 1 / 35.83#

## What's New in Version 2.0.0

In version 2.0.0, you now have access to detailed conversion rates for each currency before initiating the conversion process. This enhancement provides users with valuable insight into the exchange rates applicable to their transactions, empowering them to make more informed decisions.