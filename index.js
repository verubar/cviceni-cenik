// Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. 
// Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

// Přidejte do stránky soubor s JavaScriptem.
// Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. 
// Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
// Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
// Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
// My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. 
// Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. 
// Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
// Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), 
// ale na stránce by měl zůstat poslední vybraný plán.

const selectPlan = (planNumber) => {
    const plan1Elem = document.querySelector('#plan1');
    const plan2Elem = document.querySelector('#plan2');
    const plan3Elem = document.querySelector('#plan3');

    if (planNumber === 1) {
        plan1Elem.classList.add('plan--selected');
        plan2Elem.classList.remove('plan--selected');
        plan3Elem.classList.remove('plan--selected');
        console.log("Zvolen plán 1");
    } else if (planNumber === 2) {
        plan2Elem.classList.add('plan--selected');
        plan1Elem.classList.remove('plan--selected');
        plan3Elem.classList.remove('plan--selected');
        console.log("Zvolen plán 2");
    } else if (planNumber === 3) {
        plan3Elem.classList.add('plan--selected');
        plan1Elem.classList.remove('plan--selected');
        plan2Elem.classList.remove('plan--selected');
        console.log("Zvolen plán 3");
    } else {
        console.log("Hodnota není zvolena správně");
        plan1Elem.classList.remove('plan--selected');
        plan2Elem.classList.remove('plan--selected');
        plan3Elem.classList.remove('plan--selected');
    }
  };

  selectPlan(2);
  selectPlan(3);
  selectPlan(1);
