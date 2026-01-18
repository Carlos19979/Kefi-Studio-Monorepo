import { Text, Section, Hr, Heading } from '@react-email/components'
import * as React from 'react'
import { Base } from './base'
import { OrderDTO, OrderAddressDTO } from '@medusajs/types'

export const ORDER_PLACED = 'order-placed'

interface OrderPlacedPreviewProps {
  order: OrderDTO & { display_id: string; summary: { raw_current_order_total: { value: number } } }
  shippingAddress: OrderAddressDTO
}

export interface OrderPlacedTemplateProps {
  order: OrderDTO & { display_id: string; summary: { raw_current_order_total: { value: number } } }
  shippingAddress: OrderAddressDTO
  preview?: string
}

export const isOrderPlacedTemplateData = (data: any): data is OrderPlacedTemplateProps =>
  typeof data.order === 'object' && typeof data.shippingAddress === 'object'

export const OrderPlacedTemplate: React.FC<OrderPlacedTemplateProps> & {
  PreviewProps: OrderPlacedPreviewProps
} = ({ order, shippingAddress, preview = 'Thank you for your order!' }) => {
  const kefiMaroon = '#8B4049'
  const kefiBrown = '#3D2C2E'
  const kefiTaupe = '#6B5D5A'
  const kefiPaper = '#FCFBF9'

  return (
    <Base preview={preview}>
      <Section style={{ backgroundColor: kefiPaper, padding: '40px 20px' }}>
        {/* Header */}
        <Heading style={{
          fontSize: '32px',
          fontWeight: '300',
          textAlign: 'center',
          color: kefiBrown,
          fontFamily: 'Georgia, serif',
          margin: '0 0 10px',
          letterSpacing: '1px'
        }}>
          Kefi Studio
        </Heading>

        <Text style={{
          fontSize: '12px',
          textAlign: 'center',
          color: kefiMaroon,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          margin: '0 0 40px',
          fontWeight: '500'
        }}>
          Order Confirmation
        </Text>

        {/* Greeting */}
        <Text style={{
          fontSize: '16px',
          color: kefiBrown,
          margin: '0 0 20px',
          lineHeight: '1.6'
        }}>
          Dear {shippingAddress.first_name} {shippingAddress.last_name},
        </Text>

        <Text style={{
          fontSize: '16px',
          color: kefiTaupe,
          margin: '0 0 30px',
          lineHeight: '1.6'
        }}>
          Thank you for choosing Kefi Studio. Your order has been confirmed and will be carefully hand-poured and prepared for shipment.
        </Text>

        <Hr style={{ borderColor: '#E5E1DD', margin: '30px 0' }} />

        {/* Order Summary */}
        <Text style={{
          fontSize: '18px',
          fontWeight: '600',
          color: kefiBrown,
          margin: '0 0 15px',
          fontFamily: 'Georgia, serif'
        }}>
          Order Summary
        </Text>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <Text style={{ margin: '0 0 8px', color: kefiTaupe, fontSize: '14px' }}>
            <strong style={{ color: kefiBrown }}>Order ID:</strong> {order.display_id}
          </Text>
          <Text style={{ margin: '0 0 8px', color: kefiTaupe, fontSize: '14px' }}>
            <strong style={{ color: kefiBrown }}>Order Date:</strong> {new Date(order.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Text>
          <Text style={{ margin: '0', color: kefiBrown, fontSize: '16px', fontWeight: '600' }}>
            Total: ${(order.summary.raw_current_order_total.value / 100).toFixed(2)} {order.currency_code}
          </Text>
        </div>

        <Hr style={{ borderColor: '#E5E1DD', margin: '30px 0' }} />

        {/* Order Items */}
        <Text style={{
          fontSize: '18px',
          fontWeight: '600',
          color: kefiBrown,
          margin: '0 0 15px',
          fontFamily: 'Georgia, serif'
        }}>
          Your Items
        </Text>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {order.items.map((item, index) => (
            <div key={item.id}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 0',
                borderBottom: index < order.items.length - 1 ? '1px solid #E5E1DD' : 'none'
              }}>
                <div style={{ flex: 1 }}>
                  <Text style={{ margin: '0 0 4px', color: kefiBrown, fontSize: '15px', fontWeight: '500' }}>
                    {item.product_title}
                  </Text>
                  <Text style={{ margin: '0', color: kefiTaupe, fontSize: '13px' }}>
                    Quantity: {item.quantity}
                  </Text>
                </div>
                <Text style={{ margin: '0', color: kefiBrown, fontSize: '15px', fontWeight: '500' }}>
                  ${(item.unit_price / 100).toFixed(2)}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <Hr style={{ borderColor: '#E5E1DD', margin: '30px 0' }} />

        {/* Shipping Address */}
        <Text style={{
          fontSize: '18px',
          fontWeight: '600',
          color: kefiBrown,
          margin: '0 0 15px',
          fontFamily: 'Georgia, serif'
        }}>
          Shipping Address
        </Text>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '4px',
          marginBottom: '30px'
        }}>
          <Text style={{ margin: '0 0 4px', color: kefiBrown, fontSize: '14px' }}>
            {shippingAddress.first_name} {shippingAddress.last_name}
          </Text>
          <Text style={{ margin: '0 0 4px', color: kefiTaupe, fontSize: '14px' }}>
            {shippingAddress.address_1}
          </Text>
          {shippingAddress.address_2 && (
            <Text style={{ margin: '0 0 4px', color: kefiTaupe, fontSize: '14px' }}>
              {shippingAddress.address_2}
            </Text>
          )}
          <Text style={{ margin: '0', color: kefiTaupe, fontSize: '14px' }}>
            {shippingAddress.city}, {shippingAddress.province} {shippingAddress.postal_code}
          </Text>
          <Text style={{ margin: '0', color: kefiTaupe, fontSize: '14px' }}>
            {shippingAddress.country_code}
          </Text>
        </div>

        <Hr style={{ borderColor: '#E5E1DD', margin: '30px 0' }} />

        {/* Footer Message */}
        <Text style={{
          fontSize: '15px',
          color: kefiTaupe,
          margin: '0 0 20px',
          lineHeight: '1.6',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          We hope our candles bring warmth and tranquility to your space.
        </Text>

        <Text style={{
          fontSize: '14px',
          color: kefiTaupe,
          margin: '0',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          Questions? Contact us at <a href="mailto:hello@kefistudio.com" style={{ color: kefiMaroon, textDecoration: 'none' }}>hello@kefistudio.com</a>
        </Text>
      </Section>
    </Base>
  )
}

OrderPlacedTemplate.PreviewProps = {
  order: {
    id: 'test-order-id',
    display_id: 'ORD-123',
    created_at: new Date().toISOString(),
    email: 'test@example.com',
    currency_code: 'USD',
    items: [
      { id: 'item-1', title: 'Lavender Dreams', product_title: 'Lavender Dreams Candle', quantity: 2, unit_price: 2800 },
      { id: 'item-2', title: 'Vanilla Serenity', product_title: 'Vanilla Serenity Candle', quantity: 1, unit_price: 3200 }
    ],
    shipping_address: {
      first_name: 'Test',
      last_name: 'User',
      address_1: '123 Main St',
      city: 'Brooklyn',
      province: 'NY',
      postal_code: '11201',
      country_code: 'US'
    },
    summary: { raw_current_order_total: { value: 8800 } }
  },
  shippingAddress: {
    first_name: 'Test',
    last_name: 'User',
    address_1: '123 Main St',
    city: 'Brooklyn',
    province: 'NY',
    postal_code: '11201',
    country_code: 'US'
  }
} as OrderPlacedPreviewProps

export default OrderPlacedTemplate
