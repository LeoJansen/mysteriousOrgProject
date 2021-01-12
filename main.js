const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  function pAequorFactory(specimenNum,dna) {
      return {
          _specimenNum: specimenNum,
          _dna: dna,
          mutate () {
              let indexBaseChanged = Math.floor((Math.random() * dna.length));
              let initArray = dna.slice(0,indexBaseChanged)
              let finalArray = dna.slice((indexBaseChanged + 1),dna.length)
              let oldBase = dna[indexBaseChanged];
              let newBase;
              switch (oldBase) {
                case 'A':
                    newBase = 'T';
                    break;
                case 'T':
                    newBase = 'A';
                    break;
                case 'C':
                    newBase = 'G';
                    break;
                case 'G':
                    newBase = 'C';
                    break;
              };
          },
        compareDNA(pAequor) {
          let coincidentBases = [];
          let numCoincidentBases = 0;
          for (let i = 0; i < 15 ; i++) {
            let j = -1;
            j++
            if (this._dna[i] === pAequor._dna[i]) {
              coincidentBases.push([[i] , this._dna[i]]);
              numCoincidentBases++
            };
          };
          console.log(" ")
          console.log("... The scanning test were completed...")
          console.log(" ")
          console.log(" Coincident bases are listed below ") 
          console.log(" ")
          console.log(coincidentBases);
          console.log(" ")
          console.log(" ")
          let percentageResult  = numCoincidentBases / 15 * 100
          console.log("Match percentage = " + percentageResult + '%')
          console.log(" ")
          console.log(" ")
        }, 
      };
  };

let newSensientBeing = pAequorFactory(123,mockUpStrand());
let anotherSensientBeing = pAequorFactory(321,mockUpStrand());

console.log(newSensientBeing);
console.log(anotherSensientBeing);

newSensientBeing.compareDNA(anotherSensientBeing);

