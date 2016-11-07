import dummyjson from 'dummy-json';

export default function(){
  var template = '[\
          {{#repeat 10}}\
            {\
              "id"          : "{{@index}}",\
              "fullName"    : "{{firstName}} {{lastName}}",\
              "email"       :  "{{email}}", \
              "age"         :  {{int 15 40}},\
              "description" :  "{{lorem 4}}",\
              "thumbnail"   :  "http://placehold.it/120x120"\
            },\
          {{/repeat}}\
        ]';
  const results = dummyjson.parse(template);
  const user_list = JSON.parse(results);
  return user_list;
}
