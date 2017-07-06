// Copyright 2017, University of Colorado Boulder

/**
 * The view for the Explore screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var inherit = require( 'PHET_CORE/inherit' );
  var CircuitConstructionKitScreenView =
    require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitConstructionKitScreenView' );

  /**
   * @param {CircuitConstructionKitModel} circuitConstructionKitScreenModel
   * @param {Tandem} tandem
   * @constructor
   */
  function ExploreScreenView( circuitConstructionKitScreenModel, tandem ) {
    CircuitConstructionKitScreenView.call( this, circuitConstructionKitScreenModel, tandem, {
      numberOfLeftBatteries: 0, // Only show right-facing batteries.
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showResistivityControl: false,
      showBatteryResistanceControl: false,

      // 4 of each of the following "grab bag" items
      numberOfErasers: 2,
      numberOfDogs: 2,
      numberOfPencils: 2,
      numberOfHands: 2,
      numberOfCoins: 2,
      numberOfDollarBills: 2,
      numberOfPaperClips: 2
    } );
  }

  circuitConstructionKitDc.register( 'ExploreScreenView', ExploreScreenView );

  return inherit( CircuitConstructionKitScreenView, ExploreScreenView );
} );