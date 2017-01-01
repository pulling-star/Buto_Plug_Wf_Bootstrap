function plugin_wf_bootstrapjs(){
  this.createModal = function(data){
    if(document.getElementById(data.id)){
      document.getElementById(data.id).parentNode.removeChild(document.getElementById(data.id));
    }
    var modal_size = null;
    if(data.size){
      if(data.size=='sm'){modal_size = ' modal-sm';}
      else if(data.size=='lg'){modal_size = ' modal-lg';}
      else{modal_size = '';}
    }else{
      modal_size = '';
    }
    var bootstrap_modal = [
      {
        type: 'div', 
        attribute: {id: data.id, role: 'dialog', class: 'modal fade'}, 
        innerHTML: [
          {
            type: 'div', 
            attribute: {class: 'modal-dialog'+modal_size, id: data.id+'_dialog'},
            innerHTML: [
              {
                type: 'div',
                attribute: {class: 'modal-content', id: data.id+'_content'},
                innerHTML: [
                  {
                    type: 'div', 
                    attribute: {class: 'modal-header'},
                    innerHTML: [
                      {type: 'button', attribute: {type: 'button', class: 'close', 'data-dismiss': 'modal'}, innerHTML: 'x'}, 
                      {type: 'h4', attribute: {class: 'modal-title', onclick: "if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: data.lable}
                    ]
                  },
                  {type: 'div', attribute: {class: 'modal-body', id: data.id+'_body'}, innerHTML: data.content},
                  {
                    type: 'div', 
                    attribute: {class: 'modal-footer', id: data.id+'_footer'}, 
                    innerHTML: [
                      {type: 'button', attribute: {type: 'button', class: 'btn btn-default', 'data-dismiss': 'modal', id: data.id+'_btn_close'}, innerHTML: 'Close'}
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }];
    //Replace x with Fontawesome symbol if PluginDavegandyFontawesome450 is included.
    if(document.getElementById('PluginDavegandyFontawesome450')){
      bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML = '<i class="fa fa-close"></i>';
      if(data.icon){
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[1].innerHTML = '<i class="fa fa-'+data.icon+'"></i> '+bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[1].innerHTML;
      }
      //<i class="fa fa-book"></i>
    }
    PluginWfDom.render(bootstrap_modal, document.body);
  }
  this.modal = function(data){
    var default_data = {id: 'modal_001', lable: 'Bootstrap modal', content: 'This is some content to show Bootstrap Modal.', size: null, url: null, icon: null, backdrop: false, resizable: false};
    for (var key in data) {
      default_data[key] = data[key];
    }      
    data = default_data;
    if(!data.backdrop){
      data.backdrop = 'static'; // or true or false
    }
    //Create modal.
    this.createModal(data);
    //Run modal.
    $("#"+data.id).modal({backdrop: data.backdrop});
    //Handle scroll problem when open multiple modals.
    $('#'+data.id).on('hidden.bs.modal', function(){
      // Removing from dom.
      $(this).remove();
      // Looking for other open modals.
      var modals = (document.getElementsByClassName('modal')); // Grab modals.
      var visible_modal = false; // None visible modals.
      for(var i=0; i<modals.length; i++){
        if(modals[i].style.display != 'none'){
          visible_modal = true; // At least one visible modal.
          break;
        }
      }
      if(visible_modal){
        $("body").addClass("modal-open"); // Add class to body.
      }
    });
    if(data.url){
      if(typeof PluginWfAjax == 'object'){
        PluginWfAjax.load(data.id+'_body', data.url);         
      }else{
        console.log('PluginWfAjax is not included.');
      }
    }
    //Fix css for resizable.
    if(data.resizable && typeof wf_resize == 'object'){
      document.getElementById(data.id+'_dialog').style = 'margin:0;';
      wf_resize.resizable(data.id+'_content');
    }
  }
  this.panel = function(data){
    var default_data = {id: 'panel_001', lable: 'Bootstrap panel', content: 'Panel content.', url: null, icon: null, parent: null};
    for (var key in data) {
      default_data[key] = data[key];
    }      
    data = default_data;
    if(!data.parent){
      data.parent = document.body;
    }
    if(document.getElementById(data.id)){
      //Panel with this id already exist!
    }else{
      if(document.getElementById('PluginDavegandyFontawesome450')){
      }
      var  panel = [{type: 'div', attribute: {class: 'panel panel-default', id: data.id}, innerHTML: [
            {type: 'div', attribute: {class: 'panel-heading', id: data.id+'_heading'}, innerHTML: [
                        {type: 'button', attribute: {type: 'button', class: 'close', 'data-dismiss': 'modal', onclick: "PluginWfDom.remove('"+data.id+"');"}, innerHTML: 'x'}, 
                        {type: 'span', attribute: {class: 'modal-titlezzz'}, innerHTML: data.lable}
            ]},
            {type: 'div', attribute: {class: 'panel-body', id: data.id+'_body'}, innerHTML: data.content}
          ]}]
      PluginWfDom.render(panel, data.parent);
      if(data.url){
        if(typeof PluginWfAjax == 'object'){
          PluginWfAjax.load(data.id+'_body', data.url);         
        }else{
          console.log('PluginWfAjax is not included.');
        }
      }
    }
  }
  /**
   * Move buttons from modal-body to modal-footer using className.
   * @returns {undefined}
   */
  this.moveElement = function(from_id, to_id, class_name){
    var from = document.getElementById(from_id);
    var to = document.getElementById(to_id);
    if(!from || !to){
      return null;
    }
    if(to.getAttribute('data-wf_bootstrapjs_move_elements')===null){
      var elements = from.getElementsByClassName(class_name);
      for(var i=0;i<elements.length;i++){
        to.appendChild(elements[i]);
      }
      /**
       * Set data attribute.
       */
      to.setAttribute('data-wf_bootstrapjs_move_elements', true);
    }
  }
}
var PluginWfBootstrapjs = new plugin_wf_bootstrapjs();