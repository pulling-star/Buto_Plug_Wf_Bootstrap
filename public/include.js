function plugin_wf_bootstrapjs(){
  this.bootstrap_version = '3';
  this.createModal = function(data){
    if(document.getElementById('PluginTwitterBootstrap413v')){
      this.bootstrap_version = '4';
    }
    if(document.getElementById(data.id)){
      document.getElementById(data.id).parentNode.removeChild(document.getElementById(data.id));
    }
    var modal_size = null;
    var modal_class = 'modal';
    if(data.fade){
      modal_class += ' fade';
    }
    modal_class += ' modal-fullscreen';
    if(data.size){
      if(data.size=='sm'){modal_size = ' modal-sm';}
      else if(data.size=='lg'){modal_size = ' modal-lg';}
      else if(data.size=='xl'){modal_size = ' modal-xl';}
      else{modal_size = '';}
    }else{
      modal_size = '';
    }
    if(data.footer_btn_close){
      data.footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" id=\""+data.id+"_btn_close\">"+data.footer_btn_close_text+"</button>";
    }
    var bootstrap_modal = null;
    if(this.bootstrap_version=='3'){
      bootstrap_modal = [
        {
          type: 'div', 
          attribute: {id: data.id, role: 'dialog', class: modal_class}, 
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
                        {type: 'button', attribute: {type: 'button', class: 'close', 'data-dismiss': 'modal', id: data.id+'_modal_dismiss'}, innerHTML: 'x'}, 
                        {type: 'h4', attribute: {class: 'modal-title', onclick: "if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: data.label}
                      ]
                    },
                    {type: 'div', attribute: {class: 'modal-body', id: data.id+'_body'}, innerHTML: data.content},
                    {
                      type: 'div', 
                      attribute: {class: 'modal-footer', id: data.id+'_footer'}, 
                      innerHTML: data.footer
                    }
                  ]
                }
              ]
            }
          ]
        }];
    }else if(this.bootstrap_version=='4'){
      bootstrap_modal = [
        {
          type: 'div', 
          attribute: {id: data.id, role: 'dialog', class: modal_class}, 
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
                        {type: 'h4', attribute: {class: 'modal-title', onclick: "if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: data.label},
                        {type: 'button', attribute: {type: 'button', class: 'close', 'data-dismiss': 'modal', id: data.id+'_modal_dismiss'}, innerHTML: 'x'} 
                      ]
                    },
                    {type: 'div', attribute: {class: 'modal-body', id: data.id+'_body'}, innerHTML: data.content},
                    {
                      type: 'div', 
                      attribute: {class: 'modal-footer', id: data.id+'_footer', style: 'display:block'}, 
                      innerHTML: data.footer
                    }
                  ]
                }
              ]
            }
          ]
        }];
    }
    //Replace x with Fontawesome symbol if PluginDavegandyFontawesome450 is included.
    if(document.getElementById('PluginDavegandyFontawesome450')){
      bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML = '<i class="fa fa-close"></i>';
      if(data.icon){
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[1].innerHTML = '<i class="fa fa-'+data.icon+'"></i> '+bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[1].innerHTML;
      }
    }
    PluginWfDom.render(bootstrap_modal, document.body);
    /**
     * Set focus on modal dismiss button if exist.
     */
    if(document.getElementById(data.id+'_modal_dismiss')){
      setTimeout(function(){ document.getElementById(data.id+'_modal_dismiss').focus(); }, 500);
    }
  }
  /**
   * Creates an bootstrap modal in dom.
   * Default: {id: 'modal_001', label: 'Bootstrap modal', content: 'This is some content to show Bootstrap Modal.', size: null, url: null, icon: null, backdrop: false, resizable: false, fade: true, footer: '', footer_btn_close: false, footer_btn_close_text: 'Close'}
   * @param object data
   * @returns null
   */
  this.modal = function(data){
    /**
     * PluginBootstrapAlertwait
     */
    if(typeof PluginBootstrapAlertwait == 'object'){
      PluginBootstrapAlertwait.close();
    }
    /**
     * Typo fix.
     */
    if(data.lable){
      data.label = data.lable;
    }
    /**
     * 
     */
    var default_data = {id: 'modal_001', label: 'Bootstrap modal', content: 'This is some content to show Bootstrap Modal.', size: null, url: null, icon: null, backdrop: false, resizable: false, fade: true, footer: '', footer_btn_close: false, footer_btn_close_text: 'Close'};
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
    var default_data = {id: 'panel_001', label: 'Bootstrap panel', content: 'Panel content.', url: null, icon: null, parent: null};
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
                        {type: 'span', attribute: {class: 'modal-titlezzz'}, innerHTML: data.label}
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
  this.moveModalButtons = function(from_id){
    var from = document.getElementById(from_id);
    
    var modal_content = this.getParentNodeByClassname(from_id, 'modal-content');
    if(modal_content){
      var elements = modal_content.getElementsByClassName('modal-footer');
      if(elements){
        var modal_footer = elements[0];
        modal_footer.innerHTML = '';
        var btns = document.getElementById(from_id).getElementsByClassName('btn');
        var length = btns.length;
        for(var i=0;i<length;i++){
          modal_footer.appendChild(btns[0]);
        }
      }
    }
  }
  this.getParentNodeByClassname = function(id, className){
    var element = document.getElementById(id);
    var parent = element.parentNode;
    for(var i=0; i<100; i++){
      if(parent && parent.className==className){
        return parent;
      }else if(parent){
        parent = parent.parentNode;
      }
    }
    return null;
  }
  
}
var PluginWfBootstrapjs = new plugin_wf_bootstrapjs();