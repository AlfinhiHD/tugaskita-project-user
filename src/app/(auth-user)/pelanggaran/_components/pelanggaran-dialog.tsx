import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PenaltyType } from '@/app/_constant/global-types';

type PenaltyDetailDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  penalty: PenaltyType | null;
};

const PenaltyDetailDialog: React.FC<PenaltyDetailDialogProps> = ({ isOpen, onClose, penalty }) => {
  if (!penalty) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detail Pelanggaran</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p><strong>Nama Pengguna:</strong> {penalty.user_name}</p>
          <p><strong>Poin Penalty:</strong> {penalty.point}</p>
          <p><strong>Tanggal:</strong> {penalty.date}</p>
          <p><strong>Deskripsi:</strong> {penalty.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PenaltyDetailDialog;