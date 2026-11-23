import type { OrderStatus } from '@/types/gadgets';
import { StyleSheet, Text, View } from 'react-native';

type StatusBadgeProps = {
  status: OrderStatus;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColors: Record<OrderStatus, string> = {
    Pending: '#ffcc00',
    Completed: '#4caf50',
    Shipped: '#2196f3',
    InTransit: '#ff9800',
  };

  const statusDisplayNames: Record<OrderStatus, string> = {
    Pending: 'PENDING',
    Completed: 'COMPLETED',
    Shipped: 'SHIPPED',
    InTransit: 'IN TRANSIT',
  };

  return (
    <View style={{ ...styles.statusBadge, backgroundColor: statusColors[status] }}>
      <Text style={styles.statusText}>{statusDisplayNames[status]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default StatusBadge;
