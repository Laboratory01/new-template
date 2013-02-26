<?php
/**
 * J!Blank Template for Joomla by Joomla-book.ru
 * @category   JBlank
 * @author     smet.denis <admin@joomla-book.ru>
 * @copyright  Copyright (c) 2009-2012, Joomla-book.ru
 * @license    GNU GPL
 * @link       http://joomla-book.ru/projects/jblank JBlank project page
 */
defined('_JEXEC') or die('Restricted access');

require_once(dirname(__FILE__) . '/php/_code.php');

?><!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7 ie6" lang="<?php echo $tpl->lang;?>"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8 ie7" lang="<?php echo $tpl->lang;?>"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9 ie8" lang="<?php echo $tpl->lang;?>"> <![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" lang="<?php echo $tpl->lang;?>"> <!--<![endif]-->
<head>
    <jdoc:include type="head" />
    <link rel="stylesheet" href="<?php echo $tpl->css; ?>/main.css">
    <link rel="stylesheet" href="<?php echo $tpl->css; ?>/normalize.css">
    <script src="<?php echo $tpl->js; ?>/bootstrap/js/bootstrap.js"></script>
</head>
<body>
    <div class="wrapper">
        <header>
           <div class="top-block">
                <jdoc:include type="modules" name="top-block" />
            </div> 
           <div class="header-second-menu">
                <jdoc:include type="modules" name="header-second-menu" />
            </div>
            <div class="created-date">
                <jdoc:include type="modules" name="created-date" />
            </div>
        </header>
        <section>
            <div class="logo">
                <jdoc:include type="modules" name="logo" />
            </div>
            <?php if ($this->countModules('section-header-banner')) : ?>
                <div class="section-header-banner">
                    <jdoc:include type="modules" name="section-header-banner" />
                </div>
            <?php else: ?>
                <div class="section-header-banner"></div>
           <?php endif; ?>
            <div class="section-module-wrapper">
                <div class="section-header-socialButtons">
                    <jdoc:include type="modules" name="section-header-socialButtons" />
                </div>
                <div class="section-header-search">
                    <jdoc:include type="modules" name="section-header-search" />
                </div>
            </div>
            <?php if ($this->countModules('section-header-navbar')) : ?>
                <div class="section-header-navbar">
                    <jdoc:include type="modules" name="section-header-navbar" />
                </div>
            <?php else: ?>
                <div class="margin"></div>
            <?php endif; ?>
        </section>
        <section class="main">
            <div class="component content">
                <jdoc:include type="modules" name="pre_component" />
                <jdoc:include type="message" />
                <jdoc:include type="component" />
                <jdoc:include type="modules" name="post_component" />
            </div>
            <?php if ($this->countModules('left-column')) : ?>
                <div class="left-column">
                    <jdoc:include type="modules" name="left-column" style="header" />
                </div>
            <?php endif; ?>
            <div class="right-column">
                <jdoc:include type="modules" name="right-column" style="header" />
            </div>
            <div class="main-img">
                <jdoc:include type="modules" name="main-img" />
            </div>
        </section>
    </div>
      <footer>
            <div class="footer">
                <jdoc:include type="modules" name="footer" />
            </div>
            <div class="footer-copyright">Разработка портала: LAB01</div>
            <div class="footer-logo"><img src="/images/logo/footer_logo.png" alt="Первый свадебный интернет-журнал"></div>
            <div class="footer-links">
                <ul class="footer-link">
                    <li><a href="#">Реклама на сайте</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Карта сайта</a></li>
                </ul>
            </div>
    </footer>
    <?php echo $tpl->renderJS(); ?>
    <?php if ($this->countModules('counters')) : ?>
        <div style="display: none;"><jdoc:include type="modules" name="counters" /></div>
    <?php endif; ?>
</body>

</html>
