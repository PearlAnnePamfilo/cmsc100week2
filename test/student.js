var should = require('should-http'), //modules to use
    request = require('supertest');



describe('student', function(){
	
	var url = "http://localhost:5000";
	
	//nested na describe
	describe ("find()", function(){
	
		it('should retrive all student record', function(done){ //a test for "find" unit
			request(url)
			.get('/students')
			.end(function(err,res){
				if(err) throw err; //for error handling
				res.should.have.status(200);
				done();
		
		});
	
	
	describe ("findOne()", function(){
	
		it('should retrive a specific student record', function(done){
			request(url)
			.get('/students/2')
			.end(function(err,res){
				if(err) throw err; //for error handling
				res.should.have.status(200);
				done();
		
		});
	
	describe ("insert()", function(){
	
		
	
		it('should insert a specific student record', function(done){
		var studrec = 
		{ 'name': 'Betel',
		  'studno': '2007-12345'};
		  
		
		
			request(url)
			.post('/students')
			.get('/students/2')
			.send(studrec)
			.end(function(err,res){
				if(err) throw err; //for error handling
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.property('id', 2);
				done();
		
		});
		
		
		
	



	});
	
});
	
});