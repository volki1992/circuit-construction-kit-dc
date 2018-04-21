// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {CircuitConstructionKitModel} model
   * @param {Tandem} tandem
   * @param {Object} options
   * @constructor
   */
  function LabScreenView( model, tandem, options ) {
    var self = this;
    var circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty, function( point ) {
      return self.circuitLayerNode.globalToLocalPoint( point );
    } );

    var wireToolNode = circuitElementToolFactory.createWireToolNode( 20 );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    var circuitElementToolNodes = [

      // This page is duplicated in the Intro Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createCapacitorToolNode( 4, tandem.createTandem( 'capacitorToolNode' ) ),
      circuitElementToolFactory.createCoilToolNode( 4, tandem.createTandem( 'coilToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createHighVoltageBatteryToolNode( 4, tandem.createTandem( 'highVoltageBatteryToolNode' ) ),
      circuitElementToolFactory.createHighResistanceResistorToolNode( 4, tandem.createTandem( 'highResistanceResistorToolNode' ) ),
      
      new Node( { children: [ wireToolNode ] } ),// Wire should appear at the top of each carousel page
      circuitElementToolFactory.createHighResistanceBulbToolNode( 4, tandem.createTandem( 'highResistanceBulbToolNode' ) )
  
    ];

    CCKCScreenView.call( this, model, circuitElementToolNodes, tandem, _.extend( {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown. REVIEW: doc repeats variable name
                                // REVIEW^(samreid): I'm not sure what to do, are you saying the doc is redundant?
      showSeriesAmmeters: true
    }, options ) );
  }

  circuitConstructionKitDc.register( 'LabScreenView', LabScreenView );

  return inherit( CCKCScreenView, LabScreenView );
} );