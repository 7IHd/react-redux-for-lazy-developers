const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function  (req, res, next) {
    res.render('index', {});
});

/**
 * JSON Routes
 */
router.get('/api/conversion', function (req, res, next) {
    let originAmount = req.query.originAmount,
        originCurrency = req.query.originCurrency,
        destAmount = req.query.destAmount,
        destCurrency = req.query.destCurrency,
        calcOriginAmount = req.query.calcOriginAmount === 'true',
        xRate = getXRate(originCurrency, destCurrency);

    // decide whether to convert TO or FROM originAmount
    if (calcOriginAmount) {
        originAmount = (parseFloat(destAmount, 10) / xRate).toFixed(2);
    } else {
        destAmount = (parseFloat(originAmount, 10) / xRate).toFixed(2);
    }

    // random timeout to simulate api response times
    setTimeout(function () {
        res.json({originAmount: originAmount, destAmount: destAmount, destCurrency: destCurrency
        }, getRandomResponseTime())
    });
});

router.get('api/fees', function (req, res, next) {
    let originAmount = req.query.originAmount,
        originCurrency = req.query.originCurrency,
        destCurrency = req.query.destCurrency;

    const feeAmount = getFee(originAmount, originCurrency, destCurrency);

    // random timeout to simulate api response times
    setTimeout(function () {
        res.json({originAmount: originAmount, destAmount: destAmount, destCurrency: destCurrency
        }, getRandomResponseTime())
    });
});

/**
 * Helper Functions
 */
function getXRateA(originCurrency, destCurrency) {
    let rate = 1;

    // if both currencies are the same, exchange rate will be 1.
    if (originCurrency === destCurrency) {
        return rate;
    }

    rate = xRates[`${originCurrency}_${destCurrency}`];
    if (!rate) {
        console.log(`ERROR: Exchange rate missing for ${originCurrency} -> ${destCurrency}`);
    }

    return rate;
}

function getFee(originAmount, originCurrency, destCurrency) {
    let feePerc = 2;

    feePerc = fees[`${originCurrency}_${destCurrency}`];

    if (!feePerc) {
        console.log(`ERROR: Fee is missing`);
    }

    return feePerc;
}