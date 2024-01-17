<?php
class PluginWfBootstrapjs{
  public function widget_include(){
    $element = array();
    /**
     * 
     */
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/bootstrapjs/include.js?t='.wfFilesystem::getFiletime(wfArray::get($GLOBALS, 'sys/web_dir').'/plugin/wf/bootstrapjs/include.js')));
    /**
     * 
     */
    $element[] = wfDocument::createHtmlElement('script', 'PluginWfBootstrapjs.i18n = '.PluginWfBootstrapjs::get_i18n());
    /**
     * IE fix.
     */
    $element[] = wfDocument::createHtmlElement('style', "@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){ .modal-content{overflow:auto} }");
    /**
     * 
     */
    wfDocument::renderElement($element);
  }
  public static function get_i18n(){
    wfPlugin::includeonce('i18n/translate_v1');
    $obj_i18n = new PluginI18nTranslate_v1();
    $obj_i18n->path = '/plugin/wf/bootstrapjs/i18n';
    $i18n = array('confirm' => 'Confirm', 'ok' => 'Ok', 'cancel' => 'Cancel');
    foreach($i18n as $k => $v){
      $i18n[$k] = $obj_i18n->translateFromTheme($v);
    }
    $i18n = json_encode($i18n);
    return $i18n;
  }
}
