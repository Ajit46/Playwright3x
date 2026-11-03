class TestReport {
    static TotalTests = 0;
    static TotalPassed = 0;
    constructor(testName,status) {
    this.testName = testName;
    TestReport.TotalTests++;
    if(status){
        TestReport.TotalPassed++;
    }
    }
    static disPlayReport() {
        console.log(`Total Tests: ${this.TotalTests}`);
        console.log(`Total Passed: ${this.TotalPassed}`);
        console.log(`Total Failed: ${this.TotalTests - this.TotalPassed}`);
    }}
 new TestReport("Test 1",true);
 new TestReport("Test 2",false);
 new TestReport("Test 3",true);
 new TestReport("Test 4",false);
 new TestReport("Test 5",true);
 TestReport.disPlayReport();
