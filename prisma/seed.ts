import { PrismaClient } from "@prisma/client";
import fs from "fs";
import Papa from "papaparse";

const prisma = new PrismaClient();

async function main() {
  const csvFile = fs.readFileSync("./cost-of-living_v2.csv", "utf-8");

  const results = Papa.parse(csvFile, {
    header: false,
    skipEmptyLines: true,
  });

  for (const row of results.data as any[]) {
    await prisma.dataEntry.create({
      data: {
        cityName: row[0],
        country: row[1],
        mealInexpensiveRestaurantUSD: parseFloat(row[2]) || null,
        mealForTwoMidRangeRestaurantThreeCourseUSD: parseFloat(row[3]) || null,
        mcMealAtMcDonaldsOrEquivalentComboMealUSD: parseFloat(row[4]) || null,
        domesticBeer05LiterDraughtInRestaurantsUSD: parseFloat(row[5]) || null,
        importedBeer033LiterBottleInRestaurantsUSD: parseFloat(row[6]) || null,
        cappuccinoRegularInRestaurantsUSD: parseFloat(row[7]) || null,
        cokePepsi033LiterBottleInRestaurantsUSD: parseFloat(row[8]) || null,
        water033LiterBottleInRestaurantsUSD: parseFloat(row[9]) || null,
        milkRegular1LiterUSD: parseFloat(row[10]) || null,
        loafOfFreshWhiteBread500gUSD: parseFloat(row[11]) || null,
        riceWhite1kgUSD: parseFloat(row[12]) || null,
        eggsRegular12USD: parseFloat(row[13]) || null,
        localCheese1kgUSD: parseFloat(row[14]) || null,
        chickenFillets1kgUSD: parseFloat(row[15]) || null,
        beefRound1kgOrEquivalentBackLegRedMeatUSD: parseFloat(row[16]) || null,
        apples1kgUSD: parseFloat(row[17]) || null,
        banana1kgUSD: parseFloat(row[18]) || null,
        oranges1kgUSD: parseFloat(row[19]) || null,
        tomato1kgUSD: parseFloat(row[20]) || null,
        potato1kgUSD: parseFloat(row[21]) || null,
        onion1kgUSD: parseFloat(row[22]) || null,
        lettuce1HeadUSD: parseFloat(row[23]) || null,
        water15LiterBottleAtMarketUSD: parseFloat(row[24]) || null,
        bottleOfWineMidRangeAtMarketUSD: parseFloat(row[25]) || null,
        domesticBeer05LiterBottleAtMarketUSD: parseFloat(row[26]) || null,
        importedBeer033LiterBottleAtMarketUSD: parseFloat(row[27]) || null,
        cigarettes20PackMarlboroUSD: parseFloat(row[28]) || null,
        oneWayTicketLocalTransportUSD: parseFloat(row[29]) || null,
        monthlyPassRegularPriceUSD: parseFloat(row[30]) || null,
        taxiStartNormalTariffUSD: parseFloat(row[31]) || null,
        taxi1kmNormalTariffUSD: parseFloat(row[32]) || null,
        taxi1hourWaitingNormalTariffUSD: parseFloat(row[33]) || null,
        gasoline1LiterUSD: parseFloat(row[34]) || null,
        volkswagenGolf14_90KWTrendlineOrEquivalentNewCarUSD: parseFloat(row[35]) || null,
        toyotaCorollaSedan16l97kWComfortOrEquivalentNewCarUSD: parseFloat(row[36]) || null,
        basicElectricityHeatingCoolingWaterGarbageFor85m2ApartmentUSD: parseFloat(row[37]) || null,
        prepaidMobileTariffLocalNoDiscountsOrPlans1MinUSD: parseFloat(row[38]) || null,
        internet60MbpsOrMoreUnlimitedDataCableADSLUSD: parseFloat(row[39]) || null,
        fitnessClubMonthlyFeeFor1AdultUSD: parseFloat(row[40]) || null,
        tennisCourtRent1HourOnWeekendUSD: parseFloat(row[41]) || null,
        cinemaInternationalRelease1SeatUSD: parseFloat(row[42]) || null,
        preschoolOrKindergartenFullDayPrivateMonthlyFor1ChildUSD: parseFloat(row[43]) || null,
        internationalPrimarySchoolYearlyFor1ChildUSD: parseFloat(row[44]) || null,
        levis501OrSimilar1PairOfJeansUSD: parseFloat(row[45]) || null,
        summerDressInAChainStoreZaraHMUSD: parseFloat(row[46]) || null,
        nikeRunningShoesMidRange1PairUSD: parseFloat(row[47]) || null,
        menLeatherBusinessShoes1PairUSD: parseFloat(row[48]) || null,
        apartment1BedroomInCityCentreUSD: parseFloat(row[49]) || null,
        apartment1BedroomOutsideOfCentreUSD: parseFloat(row[50]) || null,
        apartment3BedroomsInCityCentreUSD: parseFloat(row[51]) || null,
        apartment3BedroomsOutsideOfCentreUSD: parseFloat(row[52]) || null,
        pricePerSquareMeterToBuyApartmentInCityCentreUSD: parseFloat(row[53]) || null,
        pricePerSquareMeterToBuyApartmentOutsideOfCentreUSD: parseFloat(row[54]) || null,
        averageMonthlyNetSalaryAfterTaxUSD: parseFloat(row[55]) || null,
        mortgageInterestRateInPercentagesYearlyFor20YearsFixedRate: parseFloat(row[56]) || null,
        dataQuality: parseInt(row[57]) || null,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
