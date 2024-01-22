require 'test_helper'

class RootpageControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get rootpage_index_url
    assert_response :success
  end
end
