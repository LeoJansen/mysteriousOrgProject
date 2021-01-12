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
      };
  };


  //let newSensientBeings = pAequorFactory(123, mockUpStrand());
  //console.log(newSensientBeings);

