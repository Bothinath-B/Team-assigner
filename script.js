const bt = document.getElementById('btn');
let res = document.getElementById('resetButton');
let download = document.getElementById('downloadButton');
const showResult = document.getElementById('outputContainer');
let showSelectoption = document.getElementById('downloadSelect');
let temp = [];
let num = 0;
bt.addEventListener("click", function () {
    num++;
    console.log("num:", num);
    let total = document.getElementById('total').value;
    let membersperteam = document.getElementById('mpt').value;
    let para;
    let rad;
    let team = total / membersperteam;
    let array = [];
    let store = [];

    array[0] = Math.floor(Math.random() * total) + 1;
    let at = total - 1;

    //Random and unique number in array
    while (at != 0) {
        rad = Math.floor(Math.random() * total) + 1;
        if (!array.includes(rad)) {
            array.push(rad);
        }
        else {
            at = at + 1;
        }
        at = at - 1;
    }

    //Teams assign
    let count = 0;
    let index = 0;
    let index2 = 0;
    let times = 0;
    let ct = 0;

    for (let i = 0; i < team; i++) {
        ct = i + 1;
        para = document.createElement('p');
        while (times < membersperteam) {
            store[index++] = array[count++];
            temp[index2++] = store[index - 1];
            times += 1;
        }
        //if the user click the assign teams button twice, it will show the new teams 
        if (num % 2 !== 0) {
            document.getElementById('output').innerHTML = '';
            num = 0;
        }
        console.log("ct:", ct, "store:", store);
        para.innerText = "Team " + ct + ": " + store;
        document.getElementById('output').appendChild(para);
        times = 0;
        index = 0;
        store = [];
    }

    res.style.visibility = "visible";
    download.style.visibility = "visible";
    showSelectoption.style.visibility = "visible";
    showResult.style.display = "block";



})

download.onclick = function () {
    console.log("showSelectoption:", showSelectoption.value);
    let selectedOption = showSelectoption.value;
    let total = parseInt(document.getElementById('total').value);
    let membersperteam = parseInt(document.getElementById('mpt').value);
    let row = "";
    if(selectedOption === "")
    {
        alert("Please select a download format.");
        return;
    }
    if (selectedOption === "csv") {
        let csvContent = "data:text/csv;charset=utf-8,";

        let header = ['Teams', ...Array.from({ length: membersperteam }, (_, i) => `Member ${i + 1}`)];
        console.log("Header:", header);
        csvContent += header.join(',') + "\n";

        let teamNumber = 1;

        for (let i = 0; i < temp.length; i += membersperteam) {
            let teamMembers = temp.slice(i, i + membersperteam);
            let row = [`Team ${teamNumber}`, ...teamMembers].join(',');
            console.log("Row:", row);
            csvContent += row + "\n";
            teamNumber++;
        }


        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "team_formation.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    if (selectedOption === "pdf") {
        const { jsPDF } = window.jspdf;
        //registerEduFont(jsPDF);
        registerCaveatFont(jsPDF);
        const doc = new jsPDF();
        let width= doc.internal.pageSize.getWidth();
        let height = doc.internal.pageSize.getHeight();
        let teamNumber = 1;
        
        //doc.setFont("EduTAS", "normal");
        doc.setFont("Caveat", "normal");
        doc.setFontSize(25);
        doc.text("Team Formation", width / 2, 10, { align: 'center' });
        doc.setFontSize(18);
        doc.text("Total Members: " + total, 20, 20);
        doc.text("Members per Team: " + membersperteam, 20, 27);
        //doc.setFont("helvetica", "normal");
        doc.setFontSize(18);

        for (let i = 0; i < temp.length; i += membersperteam) {
            row = `Team ${teamNumber}: `;
            let teamMembers = temp.slice(i, i + membersperteam);
            row += teamMembers.join(', ');
            doc.text(row, 20, 35 + (teamNumber - 1) * 10);
            teamNumber++;
        }

        doc.output('dataurlnewwindow', { filename: 'team_formation.pdf' });
        doc.save("team_formation.pdf");
    }
}


const resetButton = document.getElementById('resetButton');
let total = document.getElementById('total').value;
let mem = document.getElementById('mpt').value;
resetButton.addEventListener('click', () => {
    console.log("Reset button clicked");
    document.getElementById('output').innerHTML = '';
    let t = document.getElementById('total').value = null;
    let m = document.getElementById('mpt').value = null;
    total.value = '';
    mem.value = '';
    showResult.style.display = "none";
    res.style.visibility = "hidden";
    download.style.visibility = "hidden";
});
