from zope.interface import Interface

class ICollectiveAngularstarterLayer(Interface):
    """ Marker interface """

class ICollectiveAngularstarterDevelLayer(ICollectiveAngularstarterLayer):
    """ Marker interface """

class ICollectiveAngularstarterProductionLayer(ICollectiveAngularstarterLayer):
    """ Marker interface """
