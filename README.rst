collective.angularstarter
=========================

Get started with Plone + AngularJS (Yeoman powered) without any of the normal headaches associated with a manual setup.

Useful when you want to develop a single page web applications powered by Angular using Plone as backend.

How it works
------------

Before installing collective.angularstarter you need to:

* # install nodejs (suggested way NVM)
* $ npm install -g grunt-cli bower
* $ cd collective.angularstarter/collective/angularstarter/browser/angular
* $ bower install
* $ npm install

After that install the collective.angularstarter plugin and choose the more appropriate install profile:

* :default -> for production (htmlmin, image minification, concat+uglify/cssmin, uncss, cdnify)
* :devel -> suitable for development

Now you can visit your AngularJS single page web application:

* http://localhost:8080/Plone/@@angularstarter


.. figure:: https://raw.github.com/collective/collective.angularstarter/master/docs/screenshots/angularplone.png
    :figwidth: image

     Plone + Angular kickstarter. Bootstrap your AngularJS based single webapp applications with collective.angularstarter

You can extend this project and then clone it with::

    $ VENV/bin/collective_angularstarter_clone your.awesomeplugin

TODO
----

* test production vs devel layers
* makefile for init project

Links
-----

* for further details see http://davidemoro.blogspot.com/2014/09/plone-angularjs-yeoman-starter.html

Authors
-------

* Davide Moro <davide.moro@gmail.com> | @davidemoro | http://davidemoro.blogspot.it/

