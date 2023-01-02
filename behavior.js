  //*************************************************************************
  //Program: Classic Calculator
  //Written By: Gaevin Jones
  //*************************************************************************
  
  class Calculator {
    constructor(){
      this.firstOperand = null;
      this.secondOperand = null;
      this.prevFirstOperand = null;
      this.prevSecondOperand = null;
      this.totalResult = null;
      this.prevTotalResult = null;
      this.finishedCalculation = false;
      this.operation = '';
      this.previousOperation = '';
      this.clearBtn = document.getElementById('clear');
      this.buttons = Array.from(document.getElementsByClassName('btn'));
      this.displayElement = document.getElementById('base-value');
      this.clearBtn.addEventListener('click', this.clearAllEntries());
      this.buttons.map( button => {
        button.addEventListener('click', (myB) => {
          switch(myB.target.innerText){
            case '=':
              this.allEqualOut();
              break;
            case '+':
              this.setOperation('+');
              if(this.getFOperand() == null){
                this.setFOperand(Number(this.getDisplayText()));
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
              this.setSOperand(Number(this.getDisplayText()));
              console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
              if(this.getSOperand() == null && this.getFOperand() != null) {
                
                if(this.getPrevOperation() != this.getOperation()){
                  this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getOperation() + " and " + this.getPrevOperation());
                  this.updateDisplay('');
                  break;
                }else{
                  this.setTotalResult(this.calculateResult(this.getOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getTotalResult());
                  this.updateDisplay('');
                  break;
                }
              }else if((this.getFOperand() != null && this.getSOperand()) != null && this.getPrevOperation() == this.getOperation()){
                this.setTotalResult(this.calculateResult(this.getOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }else if(this.getFOperand() != null && this.getSOperand() != null && this.getPrevOperation() != this.getOperation()){
                
                this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
            case '-':
              this.setOperation('-');
              if(this.getFOperand() == null){
                this.setFOperand(Number(this.getDisplayText()));
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
              this.setSOperand(Number(this.getDisplayText()));
              
              console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
              if(this.getSOperand() == null && this.getFOperand() != null) {
                
                if(this.getPrevOperation() != this.getOperation()){
                  this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getOperation() + " and " + this.getPrevOperation());
                  this.updateDisplay('');
                  break;
                }else{
                  this.setTotalResult(this.calculateResult(this.getOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getTotalResult());
                  this.updateDisplay('');
                  break;
                }
              }else if((this.getFOperand() != null && this.getSOperand()) != null && this.getPrevOperation() == this.getOperation()){
                this.setTotalResult(this.calculateResult(this.getOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }else if(this.getFOperand() != null && this.getSOperand() != null && this.getPrevOperation() != this.getOperation()){
                
                this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
            case '/':
              this.setOperation('/');
              if(this.getFOperand() == null){
                this.setFOperand(Number(this.getDisplayText()));
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
              this.setSOperand(Number(this.getDisplayText()));
              console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
              if(this.getSOperand() == null && this.getFOperand() != null) {
                
                if(this.getPrevOperation() != this.getOperation()){
                  this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getOperation() + " and " + this.getPrevOperation());
                  this.updateDisplay('');
                  break;
                }else{
                  this.setTotalResult(this.calculateResult(this.getOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getTotalResult());
                  this.updateDisplay('');
                  break;
                }
              }else if((this.getFOperand() != null && this.getSOperand()) != null && this.getPrevOperation() == this.getOperation()){
                this.setTotalResult(this.calculateResult(this.getOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }else if(this.getFOperand() != null && this.getSOperand() != null && this.getPrevOperation() != this.getOperation()){
                
                this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
            case '*':
              this.setOperation('*');
              if(this.getFOperand() == null){
                this.setFOperand(Number(this.getDisplayText()));
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
              this.setSOperand(Number(this.getDisplayText()));
              console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
              if(this.getSOperand() == null && this.getFOperand() != null) {
                
                if(this.getPrevOperation() != this.getOperation()){
                  this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getOperation() + " and " + this.getPrevOperation());
                  this.updateDisplay('');
                  break;
                }else{
                  this.setTotalResult(this.calculateResult(this.getOperation()));
                  console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nresult of these two: " + this.getTotalResult());
                  this.updateDisplay('');
                  break;
                }
              }else if((this.getFOperand() != null && this.getSOperand()) != null && this.getPrevOperation() == this.getOperation()){
                this.setTotalResult(this.calculateResult(this.getOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }else if(this.getFOperand() != null && this.getSOperand() != null && this.getPrevOperation() != this.getOperation()){
                
                this.setTotalResult(this.calculateResult(this.getPrevOperation()));
                this.setFOperand(this.getTotalResult());
                console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() );
                this.updateDisplay('');
                break;
              }
            case 'Clear':
              this.clearAllEntries();
              break;
            default:
              this.addToOperand(myB.target.innerText);
              break;
          }
        })
      })
    }


    allEqualOut(){
      if((this.getFOperand() == null && this.getSOperand() == null) && (this.getPrevFOperand() == null && this.getPrevSOperand() == null) && Number.isNaN(Number(this.getDisplayText())))
      {
        console.log("Invalid input");
        this.updateDisplay('');
        this.nextOperation();
        return;
      }else if((this.getFOperand() == null && this.getSOperand() == null) && (this.getPrevFOperand() == null && this.getPrevSOperand() == null) && !Number.isNaN(Number(this.getDisplayText()))){
        this.setFOperand(Number(this.getDisplayText()));
        this.setOperation('+');
        this.updateDisplay('');
      }

      if(this.getSOperand() != null && this.getFOperand() != null){
        this.setSOperand(Number(this.getDisplayText()));
        this.setTotalResult(this.calculateResult(this.getOperation()));
        this.setFOperand(this.getTotalResult());
        this.updateDisplay(this.getTotalResult());
        this.nextOperation();
        return;
      }


      if((this.getFOperand() == null && this.getSOperand() == null) && (this.getPrevFOperand() != null && this.getPrevSOperand() != null)){
        this.setFOperand(this.getPrevTotalResult());
        this.setSOperand(this.getPrevSOperand());
        this.setTotalResult(this.calculateResult(this.getOperation()));
        console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nPrevFirst operand: " + this.getPrevFOperand() + "\nPrevSecond operand: " + this.getPrevSOperand() + "\nTotal Result: " + this.getTotalResult() + "\nPrev Total Result: " + this.getPrevTotalResult());
        this.updateDisplay(this.getTotalResult());
        this.nextOperation();
      }else if(this.getFOperand() != null && this.getSOperand() == null)
      {
        this.setSOperand(Number(this.getDisplayText()));
        this.setTotalResult(this.calculateResult(this.getOperation()));
        console.log("First operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nPrevFirst operand: " + this.getPrevFOperand() + "\nPrevSecond operand: " + this.getPrevSOperand() + "\nTotal Result: " + this.getTotalResult() + "\nPrev Total Result: " + this.getPrevTotalResult());
        this.updateDisplay(this.getTotalResult());
        this.nextOperation();
      }
    }

    setOperation(operationChar){
      this.setPrevOperation(this.getOperation());
      this.operation = operationChar;
      console.log("current operation: " + this.getOperation() + "\nPrevious operation: " + this.getPrevOperation());
    }

    setPrevOperation(operationChar){
      this.previousOperation = operationChar;
    }

    getPrevOperation(){
      return this.previousOperation;
    }


    getOperation(){
      return this.operation;
    }

    addToOperand(addTo){
      this.displayElement.innerText += addTo;
    }

    setFinishedCalculation(calcFinished){
      this.calcFinished = calcFinished;
    }

    getFinishedCalculation(){
      return this.calcFinished;
    }

    setFOperand(number){
      this.firstOperand = number;
    }

    getFOperand(){
      return this.firstOperand;
    }

    setTotalResult(number){
      this.setPrevTotalResult(this.getTotalResult());
      this.totalResult = number;
    }

    getTotalResult(){
      return this.totalResult;
    }

    setPrevTotalResult(number){
      this.prevTotalResult = number;
    }

    getPrevTotalResult(){
      return this.prevTotalResult;
    }

    setPrevFOperand(number){
      this.prevFirstOperand = number;
    }

    getPrevFOperand(){
      return this.prevFirstOperand;
    }

    setPrevSOperand(number){
      this.prevSecondOperand = number;
    }

    getPrevSOperand(){
      return this.prevSecondOperand;
    }

    setSOperand(number){
      this.secondOperand = number;
    }

    getSOperand(){
      return this.secondOperand;
    }

    calculateResult(operationText){
      switch(operationText){
        case '+':
          return Math.round((Number(this.getFOperand()) + Number(this.getSOperand())) * 100000) / 100000;
        case '/':
          if(Number.isNaN(Math.round((Number(this.getFOperand()) / Number(this.getSOperand())) * 100000) / 100000) || Number(this.getSOperand() == 0)){
            return 0;
          }else{
            return Math.round((Number(this.getFOperand()) / Number(this.getSOperand())) * 100000) / 100000;
          }
        case '*':
          return Math.round((Number(this.getFOperand()) * Number(this.getSOperand())) * 100000) / 100000;
        case '-':
          return Math.round((Number(this.getFOperand()) - Number(this.getSOperand())) * 100000) / 100000;
        default:
          break;
      }
    }

    updateDisplay(text){
      this.displayElement.innerText = text;
    }

    getDisplayText(){
      return this.displayElement.innerText;
    }

    nextOperation(){
      this.setPrevFOperand(this.getFOperand());
      this.setPrevSOperand(this.getSOperand());
      this.setFOperand(null);
      this.setSOperand(null);
      this.setPrevTotalResult(this.getTotalResult());
      this.setTotalResult(0);
      console.log("Ready for next operation:\nFirst operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nPrevFirst operand: " + this.getPrevFOperand() + "\nPrevSecond operand: " + this.getPrevSOperand() + "\nTotal Result: " + this.getTotalResult() + "\nPrev Total Result: " + this.getPrevTotalResult());
    }

    clearNumCache(){
      
      this.setPrevFOperand(this.getFOperand());
      this.setPrevSOperand(this.getSOperand());
      this.setFOperand(null);
      this.setSOperand(null);
      this.setOperation('');
      this.setTotalResult(0);
      console.log("Ready for next operation:\nFirst operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nPrevFirst operand: " + this.getPrevFOperand() + "\nPrevSecond operand: " + this.getPrevSOperand() + "\nTotal Result: " + this.getTotalResult() + "\nPrev Total Result: " + this.getPrevTotalResult());
    }

    clearAllEntries()
    {
      this.updateDisplay('');
      this.setFOperand(null);
      this.setSOperand(null);
      this.setPrevFOperand(null);
      this.setPrevSOperand(null);
      this.setOperation('');
      this.setTotalResult(0);
      console.log("Ready for next operation:\nFirst operand: " + this.getFOperand() + "\nSecond operand: " + this.getSOperand() + "\nPrevFirst operand: " + this.getPrevFOperand() + "\nPrevSecond operand: " + this.getPrevSOperand() + "\nTotal Result: " + this.getTotalResult() + "\nPrev Total Result: " + this.getPrevTotalResult());
    }
  }

  var cbod = new Calculator();
