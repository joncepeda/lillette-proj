function issueVSDateCount() {
        var sortedValues = [];
        var sortedName = [];
        var quarterly = ["Q1", "Q2", "Q3", "Q4"];
        var monthly = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        var quarterlyValues = [
            {
                label: "Process",
                backgroundColor: "green",
                data: [0,0,0,0]
            },
            {
                label: "System",
                backgroundColor: "blue",
                data: [0,0,0,0]
            },
            {
                label: "People",
                backgroundColor: "red",
                data: [0,0,0,0]
            },
            {
                label: "Others",
                backgroundColor: "orange",
                data: [0,0,0,0]
        }];
        var monthlyValues = [{
                label: "Process",
                backgroundColor: "green",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "System",
                backgroundColor: "blue",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "People",
                backgroundColor: "red",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "Others",
                backgroundColor: "orange",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }];

        var dateData = allData;
        var ddFreq = $("#sortNoIssueCount").val();
        var ddYear = $("#sortNoIssueYearCount").val(); 

        if(ddFreq == 'monthly') {
            sortedName = monthly;
            for(var i =0; i< dateData.length; i++) {
                var x = dateData[i]["Occurence_x0020_Date"];
                var issue = dateData[i]["Issue"].toLowerCase();
                if(x !== '') {
                    var xSpl = x.split("/");
                    var mo = parseInt(xSpl[0]);
                    if(ddYear == xSpl[2]) {
                        if(issue == "process") {
                            monthlyValues[0].data[mo-1] += 1;
                        } else if(issue == "system") {
                            monthlyValues[1].data[mo-1] += 1;
                        } else if(issue == "people") {
                            monthlyValues[2].data[mo-1] += 1;
                        } else if(issue == "others") {
                            monthlyValues[3].data[mo-1] += 1;
                        }
                    }
                }
            }
            sortedValues = monthlyValues;
        }else {
            sortedName = quarterly;
            for(var i =0; i< dateData.length; i++) {
                var x = dateData[i]["Occurence_x0020_Date"];
                var issue = dateData[i]["Issue"].toLowerCase();
                if(x !== '') {
                    var xSpl = x.split("/");
                    var mo = parseInt(xSpl[0]);
                    if(ddYear == xSpl[2]) {
                        if(issue == "process") {
                            if(mo >=10 ) {
                                quarterlyValues[0].data[3] += 1;
                            } else if(mo >= 7) {
                                quarterlyValues[0].data[2] += 1;
                            } else if(mo >= 4) {
                                quarterlyValues[0].data[1] += 1;
                            } else if(mo >= 1) {
                                quarterlyValues[0].data[0] += 1;
                            }
                        } else if(issue == "system") {
                            if(mo >=10 ) {
                                quarterlyValues[1].data[3] += 1;
                            } else if(mo >= 7) {
                                quarterlyValues[1].data[2] += 1;
                            } else if(mo >= 4) {
                                quarterlyValues[1].data[1] += 1;
                            } else if(mo >= 1) {
                                quarterlyValues[1].data[0] += 1;
                            }
                        } else if(issue == "people") {
                            if(mo >=10 ) {
                                quarterlyValues[2].data[3] += 1;
                            } else if(mo >= 7) {
                                quarterlyValues[2].data[2] += 1;
                            } else if(mo >= 4) {
                                quarterlyValues[2].data[1] += 1;
                            } else if(mo >= 1) {
                                quarterlyValues[2].data[0] += 1;
                            }
                        } else if(issue == "others") {
                            if(mo >=10 ) {
                                quarterlyValues[3].data[3] += 1;
                            } else if(mo >= 7) {
                                quarterlyValues[3].data[2] += 1;
                            } else if(mo >= 4) {
                                quarterlyValues[3].data[1] += 1;
                            } else if(mo >= 1) {
                                quarterlyValues[3].data[0] += 1;
                            }
                        }
                    }
                }
            }
            sortedValues = quarterlyValues;
        }

        return [sortedName, sortedValues];
    }
    function issueVSDateAmount() {
        var sortedValues = [];
        var sortedName = [];
        var quarterly = ["Q1", "Q2", "Q3", "Q4"];
        var monthly = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        var quarterlyValues = [
            {
                label: "Process",
                backgroundColor: "green",
                data: [0,0,0,0]
            },
            {
                label: "System",
                backgroundColor: "blue",
                data: [0,0,0,0]
            },
            {
                label: "People",
                backgroundColor: "red",
                data: [0,0,0,0]
            },
            {
                label: "Others",
                backgroundColor: "orange",
                data: [0,0,0,0]
        }];
        var monthlyValues = [{
                label: "Process",
                backgroundColor: "green",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "System",
                backgroundColor: "blue",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "People",
                backgroundColor: "red",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                label: "Others",
                backgroundColor: "orange",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }];
        var dateData = data;
        var ddFreq = $("#sortNoIssueAmount").val();
        var ddYear = $("#sortNoIssueYearAmount").val();
        if(ddFreq == 'monthly') {
            sortedName = monthly;
            for(var i =0; i< dateData.length; i++) {
                var x = dateData[i]["Occurence_x0020_Date"];
                var issue = dateData[i].Issue.toLowerCase();
                var dateAmount = dateData[i]["Amount_x0020_in_x0020_SGD"];
                if(x !== '') {
                    var xSpl = x.split("/");
                    var mo = parseInt(xSpl[0]);
                    if(ddYear == xSpl[2]) {
                        if(issue == "process") {
                            monthlyValues[0].data[mo-1] += parseFloat(dateAmount);
                        } else if(issue == "system") {
                            monthlyValues[1].data[mo-1] += parseFloat(dateAmount);
                        } else if(issue == "people") {
                            monthlyValues[2].data[mo-1] += parseFloat(dateAmount);
                        } else if(issue == "others") {
                            monthlyValues[3].data[mo-1] += parseFloat(dateAmount);
                        }
                    }
                }
            }
            sortedValues = monthlyValues;
        }else {
            sortedName = quarterly;
            for(var i =0; i< dateData.length; i++) {
                var x = dateData[i]["Occurence_x0020_Date"];
                var issue = dateData[i].Issue.toLowerCase();
                var dateAmount = dateData[i]["Amount_x0020_in_x0020_SGD"];
                if(x !== '') {
                    var xSpl = x.split("/");
                    var mo = parseInt(xSpl[0]);
                    if(ddYear == xSpl[2]) {
                        if(issue == "process") {
                            if(mo >=10 ) {
                                quarterlyValues[0].data[3] += parseFloat(dateAmount);
                            } else if(mo >= 7) {
                                quarterlyValues[0].data[2] += parseFloat(dateAmount);
                            } else if(mo >= 4) {
                                quarterlyValues[0].data[1] += parseFloat(dateAmount);
                            } else if(mo >= 1) {
                                quarterlyValues[0].data[0] += parseFloat(dateAmount);
                            }
                        } else if(issue == "system") {
                            if(mo >=10 ) {
                                quarterlyValues[1].data[3] += parseFloat(dateAmount);
                            } else if(mo >= 7) {
                                quarterlyValues[1].data[2] += parseFloat(dateAmount);
                            } else if(mo >= 4) {
                                quarterlyValues[1].data[1] += parseFloat(dateAmount);
                            } else if(mo >= 1) {
                                quarterlyValues[1].data[0] += parseFloat(dateAmount);
                            }
                        } else if(issue == "people") {
                            if(mo >=10 ) {
                                quarterlyValues[2].data[3] += parseFloat(dateAmount);
                            } else if(mo >= 7) {
                                quarterlyValues[2].data[2] += parseFloat(dateAmount);
                            } else if(mo >= 4) {
                                quarterlyValues[2].data[1] += parseFloat(dateAmount);
                            } else if(mo >= 1) {
                                quarterlyValues[2].data[0] += parseFloat(dateAmount);
                            }
                        } else if(issue == "others") {
                            if(mo >=10 ) {
                                quarterlyValues[3].data[3] += parseFloat(dateAmount);
                            } else if(mo >= 7) {
                                quarterlyValues[3].data[2] += parseFloat(dateAmount);
                            } else if(mo >= 4) {
                                quarterlyValues[3].data[1] += parseFloat(dateAmount);
                            } else if(mo >= 1) {
                                quarterlyValues[3].data[0] += parseFloat(dateAmount);
                            }
                        }
                    }
                }
            }
            sortedValues = quarterlyValues;
        }

        return [sortedName, sortedValues];
    }
