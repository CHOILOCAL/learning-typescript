module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // package.json 로드
        watch: {
            files: ['**/*.ts'], // 감지할 변경사항
            task: ['exec/run_tsc'] // 파일이 변경되면 실행할 작업소스
        },
        exec: {
            run_tsc: {cmd: 'tsc'} // 파일이 변경되면 실행할 소스
        }
    });
    grunt.registerTask('default', ['watch']);
};
