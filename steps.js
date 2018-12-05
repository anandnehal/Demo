describe('angularjs homepage todo list', function() {
	var fs = require("fs");
	var expect = require("chai").expect
	var should = require("chai").should();
	var assert = require("chai").assert;
	//import { Alert } from 'selenium-webdriver';

	it('should add a todo', function(callback) {
		browser.manage().window().maximize();
		browser.ignoreSynchronization= true;
		var Ec = protractor.ExpectedConditions;
		
		browser.get("https://google.com")
		
		var originalElement = element(by.xpath("//input[@name='q']"));
		 var duplicate = originalElement.clone();
		browser.wait(Ec.presenceOf(originalElement),5000);
		duplicate.isPresent().then(function(flag){
			console.log("flag is "+flag);
		});
		duplicate.getText().then(function(text){
			console.log("presend text is*******"+text);
		});
		duplicate.getId().then(function(id){
			console.log("id is "+id);
		});
		duplicate.getCssValue().then(function(css){
			console.log("css value is****"+css);
		});
		duplicate.getSize().then(function(siz){
			console.log("widthe is "+siz.width);
			console.log("height is "+siz.height);
		});
		duplicate.getLocation().then(function(siz){
			console.log("x-coordinate is "+siz.x);
			console.log("y-coordinate "+siz.y);
		});
		duplicate.isEnabled().then(function(siz){
			console.log("enable*** "+siz);
			
		});
		duplicate.click();
		duplicate.isSelected().then(function(siz){
			console.log("selected***** "+siz);
		});
		browser.getCurrentUrl().then(function(url){
			console.log("current url is "+url);
		});
		browser.getTitle().then(function(url){
			console.log("current title is "+url);
		});
		
		originalElement.sendKeys("My name is lakhan");
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		browser.sleep(3000)
		
		duplicate.getAttribute("value").then(function(text){
			console.log(text)
		});
		function writeScreenShot(data, filename) {
			  var stream = fs.createWriteStream(filename);
			  stream.write(new Buffer(data, 'base64'));
			  stream.end();
			}
			//var foo = element(by.id('foo'));
			browser.takeScreenshot().then(function(png) {
			  writeScreenShot(png, 'google.png');
			});
			browser.sleep(4000);
//			var gmail = element(by.xpath("//*[@id='hplogo']"));
//			
//			browser.actions().keyDown(protractor.key.ctrl).perform();
//			browser.actions().keyDown(protractor.key.N).perform();
//			browser.actions().keyUp(protractor.key.ctrl).perform();
//			browser.actions().keyUp(protractor.key.N).perform();
//			
			browser.getTitle().then(function(title){
				console.log("title of page is"+title);
				expect("job in google").to.equal("job in google");
				expect(title).to.be.a('String');
			//	var actual_length = title.length
				
					//console.log("title length is: "+actual_length);
					
				//	expect(actual_length).to.have.lengthOf(33);
					//title.should.equal("my name");
					
				//	actual_length.should.have.lengthOf(34);
					title.should.be.a("String");
					assert.equal(title,"my name ", "title does not match");
					
				
				
			})
		
		callback();
	});
});