'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, FileText, Camera, Save } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { toast } from '@/lib/store/useToastStore';

export default function ProfileSettingsPage() {
  const { user } = useAuthStore();
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    displayName: user?.name?.split(' ')[0] || '',
    email: user?.email || '',
    jobTitle: 'Head of Operations',
    bio: 'Passionate about automating workflows and saving time for teams. I lead operations at Nexora and have been using Flowmatic since 2025.',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSaving(false);
    toast.success('Profile updated successfully');
  };

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit}>
        {/* Avatar Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#6c47ff] flex items-center justify-center text-2xl font-bold text-white">
                  {formData.fullName.split(' ').map(n => n[0]).join('')}
                </div>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-[#6c47ff] rounded-full flex items-center justify-center text-white hover:bg-[#5a3de6] transition-colors"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#e8e8f4]">Profile Photo</h3>
                <p className="text-sm text-[#6b6b9a]">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Basic Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#e8e8f4] mb-6">Basic Information</h3>
            
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                    Display Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
                    <input
                      type="text"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                      className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                  Job Title
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b9a]" />
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#e8e8f4] mb-2">
                  Bio
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-[#6b6b9a]" />
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    className="w-full bg-[#0f0f1c] border border-[#1e1e35] rounded-lg py-2.5 pl-10 pr-4 text-[#e8e8f4] focus:outline-none focus:border-[#6c47ff] resize-none"
                  />
                </div>
                <p className="text-xs text-[#6b6b9a] mt-1">Brief description for your profile. Max 250 characters.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setFormData({
              fullName: user?.name || '',
              displayName: user?.name?.split(' ')[0] || '',
              email: user?.email || '',
              jobTitle: 'Head of Operations',
              bio: 'Passionate about automating workflows and saving time for teams. I lead operations at Nexora and have been using Flowmatic since 2025.',
            })}
          >
            Cancel
          </Button>
          <Button type="submit" loading={isSaving}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
