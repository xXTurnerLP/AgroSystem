const express = require("express");
const router = express.Router();
const fs = require("fs");

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////              Lamps              ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/lamps-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.lamps_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/lamps-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.lamps_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////              Pump2              ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/pump2-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.pump2_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/pump2-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.pump2_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////              Pump1              ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/pump1-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.pump1_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/pump1-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.pump1_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////               Drip              ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/drip-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.drip_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/drip-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.drip_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////               Rain              ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/rain-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.rain_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/rain-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.rain_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////       Water and Fertilizer      ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/water-fert-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.waterfert_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/water-fert-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.waterfert_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////             Chem drip           ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/chem-drip-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.chemdrip_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/chem-drip-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.chemdrip_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////              fan in             ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/fan-in-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.fanin_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/fan-in-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.fanin_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////             fan out             ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/fan-out-start", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.fanout_on = 1;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

router.get("/fan-out-stop", (req, res) => {
    fs.readFile("./public/data.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try {
            var json;
            json = JSON.parse(jsonString);
            json.fanout_on = 0;
            json = JSON.stringify(json);
            fs.writeFile("./public/data.json", json, err => {
            if (err)
                console.log("error writing file: " + err);
    });
        } catch (error) {
            console.log('Error parsing JSON string:', error);
        }
    });
    res.redirect("..");
});

module.exports = router;