
// Basic template description.
exports.description = 'Generate a grunt-init template template (:';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ Template generation for coding horsepower ! ';

// // Template-specific notes to be displayed after question prompts.
// exports.after = 'You should now install project dependencies with _npm ' +
// 'install_. After that, you may execute project tasks with _grunt_. For ' +
// 'more information about installing and configuring Grunt, please see ' +
// 'the Getting Started guide:' +
// '\n\n' +
// 'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({type: 'node'}, [
		init.prompt('name'),
		init.prompt('description'),
		init.prompt('repository'),
		init.prompt('bugs'),
		init.prompt('licenses'),
		init.prompt('author_name'),
		init.prompt('author_email'),
		init.prompt('author_url'),
	], function(err, props) {
		props.keywords = [];
		
		// Files to copy (and process).
		var files = init.filesToCopy(props);

		if (!props.travis) { delete files['.travis.yml']; }

	// Add properly-named license files.
	init.addLicenseFiles(files, props.licenses);

	// Actually copy (and process) files.
	init.copyAndProcess(files, props);

	// All done!
	done();
});

};
