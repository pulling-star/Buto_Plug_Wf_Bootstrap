<?php
class PluginWfBootstrapjs{
  public static function widget_include(){
    $element = array();
    /**
     * 
     */
    $element[] = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/bootstrapjs/include.js?t='.wfFilesystem::getFiletime(wfArray::get($GLOBALS, 'sys/web_dir').'/plugin/wf/bootstrapjs/include.js')));
    /**
     * IE fix.
     */
    $element[] = wfDocument::createHtmlElement('style', "@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){ .modal-content{overflow:auto} }");
    /**
     * 
     */
    wfDocument::renderElement($element);
  }
}
