function plugin_wf_bootstrapjs(){
  this.bootstrap_version = '3';
  this.createModal = function(data){
    if(document.getElementById('PluginTwitterBootstrap413v')){
      this.bootstrap_version = '4';
    }
    if(document.getElementById('PluginTwitterBootstrap530v')){
      this.bootstrap_version = '5';
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
    var btn_reload_style = 'display:none';
    if(data.btn_reload){
      if(this.bootstrap_version != '5'){
        btn_reload_style = '';
      }else{
        btn_reload_style = '--bs-btn-close-bg:none;margin-top:-20px;';
      }
    }
    if(data.footer_btn_close){
      if(this.bootstrap_version != 5){
        data.footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" id=\""+data.id+"_btn_close\">"+data.footer_btn_close_text+"</button>";
      }else{
        data.footer += "<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\" id=\""+data.id+"_btn_close\">"+data.footer_btn_close_text+"</button>";
      }
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
                        {type: 'h4', attribute: {class: 'modal-title', onclick: "console.clear();if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: [
                          {type: 'img', innerHTML: null, attribute: {src: '/plugin/icons/octicons/build/svg/'+data.icon+'.svg', style: 'width:20px;margin-top:-4px;margin-right:4px'}},
                          {type: 'span', innerHTML: data.label, attribute: {id: data.id+'_label'}}
                        ]},
                        {type: 'button', attribute: {type: 'button', class: 'close', style: btn_reload_style, onclick: "if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: [{type: 'img', innerHTML: null, attribute: {src: '/plugin/icons/octicons/build/svg/sync.svg'}}] },
                        {type: 'button', attribute: {type: 'button', class: 'close', style: 'margin-left:0px', 'data-dismiss': 'modal', id: data.id+'_modal_dismiss'}, innerHTML: [{type: 'img', innerHTML: null, attribute: {src: '/plugin/icons/octicons/build/svg/x.svg', style: 'width:20px'}}]} 
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
        /**
         * Handle icon
         */
        if(!data.icon.length){
          bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].attribute.style='display:none';
          bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].attribute.src='';
        }
        /**
         * Handle footer
         */
        if(!data.footer.length){
          bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[2].attribute.style='display:none';
        }
    }else if(this.bootstrap_version=='5'){
      bootstrap_modal = [
      {
        type: 'div', 
        attribute: {id: data.id, role: 'dialog', class: modal_class, "data-bs-backdrop": data.backdrop}, 
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
                      {type: 'h4', attribute: {class: 'modal-title', onclick: "console.clear();if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: [
                        {type: 'img', innerHTML: null, attribute: {src: '/plugin/icons/octicons/build/svg/'+data.icon+'.svg', style: 'width:20px;margin-top:-4px;margin-right:4px'}},
                        {type: 'span', innerHTML: data.label, attribute: {id: data.id+'_label'}}
                      ]},
                      {type: 'button', attribute: {type: 'button', class: 'btn-close close', style: btn_reload_style, onclick: "if(typeof PluginWfAjax == 'object'){PluginWfAjax.update('"+data.id+'_body'+"');}"}, innerHTML: [{type: 'img', innerHTML: null, attribute: {src: '/plugin/icons/octicons/build/svg/sync.svg'}}] },
                      {type: 'button', attribute: {type: 'button', class: 'btn-close close', style: 'margin-left:0px', 'data-bs-dismiss': 'modal', id: data.id+'_modal_dismiss'}, innerHTML: null} 
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
      /**
       * Handle icon
       */
      if(!data.icon.length){
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].attribute.style='display:none';
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].innerHTML[0].attribute.src='';
      }
      /**
       * Handle footer
       */
      if(!data.footer.length && data.footer != true){
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[2].attribute.style='display:none';
      }
      /**
       * body bg
       */
      if(data.body_bg.length){
        bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[1].attribute.class=bootstrap_modal[0].innerHTML[0].innerHTML[0].innerHTML[1].attribute.class+' bg-'+data.body_bg;
      }
    }
    /**
     * 
     */
    PluginWfDom.render(bootstrap_modal, document.body);
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
    var default_data = {
      id: 'modal_001', 
      label: 'Bootstrap modal', 
      content: '', 
      size: null, 
      url: null, 
      icon: '', 
      backdrop: true, 
      resizable: false, 
      fade: true, 
      footer: '', 
      footer_btn_close: false, 
      footer_btn_close_text: 'Close',
      btn_reload: false,
      body_bg: ''
    };
    for (var key in data) {
      default_data[key] = data[key];
    }      
    data = default_data;
    if(!data.backdrop){
      data.backdrop = '_none_'; // or true or false
    }else{
      data.backdrop = 'static';
    }
    /**
     * Close modal if exist.
     */
    $('#'+data.id).modal('hide');
    //Create modal.
    this.createModal(data);
    //Run modal.
    if(this.bootstrap_version != 5){
      $("#"+data.id).modal({backdrop: data.backdrop});
    }else{
      $("#"+data.id).modal('show');
    }
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
  this.modalReload = function(id){
    PluginWfAjax.update(id+'_body');
    return null;
  }
}
var PluginWfBootstrapjs = new plugin_wf_bootstrapjs();
