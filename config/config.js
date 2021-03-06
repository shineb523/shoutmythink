 /*
  * 설정
  */

 module.exports = {

     server_port: 8081,

     db_url: 'mongodb://shineb523:Sesteem7962@ds215370.mlab.com:15370/shoutmythink',

     db_schemas: [{
             file: './think_schema',
             collection: 'think_schema',
             specified_collection_name: 'think_schema',
             schemaName: 'think_schema',
             modelName: 'think_model'
         }
     ],

     route_info: [{
             method_file_path: '../routes/route_files/index_get',
             path: '/',
             type: 'get'
         },
         {
                 method_file_path: '../routes/route_files/write_article_post',
                 path: '/write_article_post',
                 type: 'post'
         },
         {
                 method_file_path: '../routes/route_files/error_get',
                 path: '/error_get',
                 type: 'get'
         }

     ],

     jsonrpc_api_path: '/api'
 }
