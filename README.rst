collective.angularstarter
=========================

Get started with Plone + AngularJS (Yeoman powered) without any of the normal headaches associated with a manual setup.

Useful when you want to develop a single page webapp using Plone.

How it works
------------

Before installing collective.angularstarter you need to:

1 - install nodejs (suggested way NVM)
2 - npm install -g grunt-cli bower
3 - cd collective.angularstarter/collective/angularstarter/browser/angular
4 - bower install
5 - npm install

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

Authors
-------

* Davide Moro <davide.moro@gmail.com> | @davidemoro | http://davidemoro.blogspot.it/

