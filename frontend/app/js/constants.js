var keyMirror = require('react/lib/keyMirror');

module.exports = {
    CHANGE_EVENT: "change",
    config: keyMirror({
        UPDATE_ADDRESS: null,
        UPDATE_ETHEREUM_CLIENT_SUCCESS: null,
        UPDATE_ETHEREUM_CLIENT_FAILED: null,
        UPDATE_DEBUG: null,
        UPDATE_PERCENT_LOADED_SUCCESS: null,
        UPDATE_DEMO_MODE: null,
        UPDATE_RANGE: null,
        UPDATE_RANGE_END: null
    }),
    network: keyMirror({
        LOAD_NETWORK: null,
        UPDATE_READY: null,
        UPDATE_ETHEREUM_STATUS: null,
        UPDATE_IS_MONITORING_BLOCKS: null,
        UPDATE_BLOCK_CHAIN_AGE: null,
        ETHEREUM_STATUS_CONNECTED: null,
        ETHEREUM_STATUS_FAILED: null,
        ETHEREUM_STATUS_LOADING: null
    }),
    trade: keyMirror ({
        LOAD_TRADES: null,
        LOAD_TRADES_FAIL: null,
        LOAD_TRADES_SUCCESS: null,
        LOAD_TRADES_PROGRESS: null,
        UPDATE_TRADES: null,
        UPDATE_TRADES_FAIL: null,
        UPDATE_TRADES_SUCCESS: null,
        UPDATE_TRADES_PROGRESS: null,
        ADD_TRADE: null,
        ADD_TRADE_FAIL: null,
        FILL_TRADE: null,
        FILL_TRADE_FAIL: null,
        FILL_TRADES: null,
        FILL_TRADES_FAIL: null,
        CANCEL_TRADE: null,
        CANCEL_TRADE_FAIL: null,
        ESTIMATE_GAS: null,
        ESTIMATE_GAS_ADD: null,
        ESTIMATE_GAS_FILL: null,
        HIGHLIGHT_FILLING: null,
        HIGHLIGHT_FILLING_FAIL: null,
        CLICK_FILL: null,
        CLICK_FILL_FAIL: null,
        CLICK_FILL_SUCCESS: null,
        SWITCH_MARKET: null,
        SWITCH_MARKET_FAIL: null,
        SWITCH_TYPE: null,
        SWITCH_TYPE_FAIL: null
    }),
    user: keyMirror ({
        LOAD_USER: null,
        LOAD_USER_FAIL: null,
        LOAD_USER_SUCCESS: null,
        LOAD_ADDRESSES: null,
        LOAD_ADDRESSES_FAIL: null,
        LOAD_ADDRESSES_SUCCESS: null,
        LOAD_DEFAULT_ACCOUNT: null,
        UPDATE_BALANCE: null,
        UPDATE_BALANCE_FAIL: null,
        UPDATE_BALANCE_SUB: null,
        UPDATE_BALANCE_SUB_FAIL: null,
        DEPOSIT: null,
        DEPOSIT_FAIL: null,
        WITHDRAW: null,
        WITHDRAW_FAIL: null,
        SEND_SUB: null,
        SEND_SUB_FAIL: null,
        SEND_ETHER: null,
        SEND_ETHER_FAIL: null,
        SWITCH_ADDRESS: null
    }),
    market: keyMirror ({
        CHANGE_MARKET: null,
        LOAD_MARKETS: null,
        LOAD_MARKETS_FAIL: null,
        LOAD_MARKETS_SUCCESS: null,
        UPDATE_MARKET_BALANCE: null,
        LOAD_PRICES: null,
        LOAD_TRANSACTIONS: null,
        TOGGLE_FAVORITE: null
    })
};
